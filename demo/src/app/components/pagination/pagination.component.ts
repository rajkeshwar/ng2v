import {Component} from '@angular/core';
import {DEMO_SNIPPETS} from './demos';

@Component({
  selector: 'ng2vd-pagination',
  template: `
    <ng2vd-content-wrapper component="Pagination">
      
      <ng2vd-example-box demoTitle="Basic pagination" [snippets]="snippets" component="pagination" demo="basic">
        <ng2vd-pagination-basic></ng2vd-pagination-basic>
      </ng2vd-example-box>
      <ng2vd-example-box demoTitle="Advanced pagination" [snippets]="snippets" component="pagination" demo="advanced">
        <ng2vd-pagination-advanced></ng2vd-pagination-advanced>
      </ng2vd-example-box>
      <ng2vd-example-box demoTitle="Pagination size" [snippets]="snippets" component="pagination" demo="size">
        <ng2vd-pagination-size></ng2vd-pagination-size>
      </ng2vd-example-box>
      <ng2vd-example-box demoTitle="Disabled pagination" [snippets]="snippets" component="pagination" demo="disabled">
        <ng2vd-pagination-disabled></ng2vd-pagination-disabled>
      </ng2vd-example-box>
      <ng2vd-example-box demoTitle="Global configuration" [snippets]="snippets" component="pagination" demo="config">
        <ng2vd-pagination-config></ng2vd-pagination-config>
      </ng2vd-example-box>

      <ng2vd-api-docs directive="Ng2vPagination"></ng2vd-api-docs>
      <ng2vd-api-docs-config type="Ng2vPaginationConfig"></ng2vd-api-docs-config>
      
    </ng2vd-content-wrapper>
  `
})
export class Ng2vdPagination {
  snippets = DEMO_SNIPPETS;
}
