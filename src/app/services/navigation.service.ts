import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';

@Injectable()

export class NavigationService {

  pages: any[] = [];

  home =  {
    name: 'NAV',
    path: '/',
    uuid: ''
  };

  constructor(private httpClient: HttpClient) {
  }


  getPagesFromRESTApi(): any[] {

    let query =
      '{\n' +
      '  jcr(workspace: LIVE) {\n' +
      '    nodeByPath(path: "/sites/ex-angular/home") {\n' +
      '      displayName(language: "en"),\n' +
      '      path,\n' +
      '      uuid,\n' +
      '      children(typesFilter: {types: "jnt:page"}) {\n' +
      '        nodes {\n' +
      '          path,\n' +
      '          uuid,\n' +
      '          displayName(language: "en"),\n' +
      '          template: property(name: "j:templateName") {\n' +
      '            value\n' +
      '          },\n' +
      '          mixinTypes {\n' +
      '            name\n' +
      '          }\n' +
      '        }\n' +
      '      }\n' +
      '    }\n' +
      '  }\n' +
      '}' ;

    const graphQLQuery = '{"query":"' +
                          query.replace(/(\r\n|\n|\r)/gm, "").replace(/(\\n)/gm, "").replace(/(")/gm, "\\\"")
                          +'","variables":null,"operationName":null}' ;


    /*
     * TODO : send this in config
     */
    const uri = 'http://localhost:8080/modules/graphql';


    this.httpClient
      .post<any>(uri, graphQLQuery)
      .subscribe(
        (response) => {
          const pagesInResponse = response.data.jcr.nodeByPath.children.nodes;
          for (let i = 0; i < pagesInResponse.length; i++) {
            const page = pagesInResponse[i];
            this.pages.push(page);
          }
          this.home.name = response.data.jcr.nodeByPath.displayName;
          this.home.path = response.data.jcr.nodeByPath.path;
          this.home.uuid = response.data.jcr.nodeByPath.uuid;

        }, (error) => {
          console.log('Error ' + error);
        }
      );

      return this.pages;
  }



}
