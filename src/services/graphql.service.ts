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

    let query =
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

    const graphQLQuery = '{"query":"' +
                          query.replace(/(\r\n|\n|\r)/gm, "").replace(/(\\n)/gm, "").replace(/(")/gm, "\\\"")
                          +'","variables":null,"operationName":null}' ;

    return this.httpClient.post<any>(API_ENDPOINT , graphQLQuery);

  }



}
