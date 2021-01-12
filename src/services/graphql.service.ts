import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import { environment } from "../environments/environment";
import {Observable} from "rxjs";

const API_ENDPOINT  = environment.jahiaHost+ '/modules/graphql';

@Injectable()

export class GraphqlService {

  constructor(private httpClient: HttpClient) {
  }

  getPagesFromRESTApi(pagePath: string): Observable<any>{

    const query =
      '{\n' +
      '  jcr(workspace: LIVE) {\n' +
      '    nodeByPath(path: "/sites/'+environment.jahiaSiteName+pagePath+'") {\n' +
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

      return this.executeQuery(query);

  }

  getContentInList(parentId: string, listName: string): Observable<any>{
    const query = '{\n' +
      '  jcr(workspace: LIVE) {\n' +
      '    nodeById(uuid: "'+parentId+'"){\n' +
      '      displayName,\n' +
      '      path,\n' +
      '      children(typesFilter: {types: "jnt:contentList"}, names: "'+listName+'"){\n' +
      '        nodes  { \n' +
      '          path,\n' +
      '          name,\n' +
      '          uuid,\n' +
      '          children (typesFilter: {types:"jnt:content"}){\n' +
      '            nodes {\n' +
      '              path,\n' +
      '              name,\n' +
      '              uuid,\n' +
      '              primaryNodeType{name}\n' +
      '            }\n' +
      '        }\n' +
      '        }\n' +
      '      }\n' +
      '    }\n' +
      '  }\n' +
      '}';

    return this.executeQuery(query);

  }


  getBigText(contentId: string){
    const query =
      '{\n' +
      '  jcr(workspace: LIVE) {\n' +
      '    nodeById(uuid: "'+contentId+'"){\n' +
      '      displayName,\n' +
      '      path,\n' +
      '      text: property(name: "text", language: "en"){\n' +
      '         value\n' +
      '      }\n' +
      '    }\n' +
      '  }\n' +
      '}' ;

    return this.executeQuery(query);
  }


  private executeQuery(query: string): Observable<any>{

    const graphQLQuery = '{"query":"' +
      query.replace(/(\r\n|\n|\r)/gm, "").replace(/(\\n)/gm, "").replace(/(")/gm, "\\\"")
      +'","variables":null,"operationName":null}' ;

    return this.httpClient.post<any>(API_ENDPOINT , graphQLQuery);

  }


}
