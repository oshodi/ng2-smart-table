import * as tslib_1 from "tslib";
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Grid } from '../../lib/grid';
import { DataSource } from '../../lib/data-source/data-source';
let Ng2SmartTableTheadComponent = class Ng2SmartTableTheadComponent {
    constructor() {
        this.sort = new EventEmitter();
        this.selectAllRows = new EventEmitter();
        this.create = new EventEmitter();
        this.filter = new EventEmitter();
    }
    ngOnChanges() {
        this.isHideHeader = this.grid.getSetting('hideHeader');
        this.isHideSubHeader = this.grid.getSetting('hideSubHeader');
    }
};
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Grid)
], Ng2SmartTableTheadComponent.prototype, "grid", void 0);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", DataSource)
], Ng2SmartTableTheadComponent.prototype, "source", void 0);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Boolean)
], Ng2SmartTableTheadComponent.prototype, "isAllSelected", void 0);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", EventEmitter)
], Ng2SmartTableTheadComponent.prototype, "createConfirm", void 0);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", Object)
], Ng2SmartTableTheadComponent.prototype, "sort", void 0);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", Object)
], Ng2SmartTableTheadComponent.prototype, "selectAllRows", void 0);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", Object)
], Ng2SmartTableTheadComponent.prototype, "create", void 0);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", Object)
], Ng2SmartTableTheadComponent.prototype, "filter", void 0);
Ng2SmartTableTheadComponent = tslib_1.__decorate([
    Component({
        selector: '[ng2-st-thead]',
        template: "<tr ng2-st-thead-titles-row *ngIf=\"!isHideHeader\"\r\n                            class=\"ng2-smart-titles\"\r\n                            [grid]=\"grid\"\r\n                            [isAllSelected]=\"isAllSelected\"\r\n                            [source]=\"source\"\r\n                            (sort)=\"sort.emit($event)\"\r\n                            (selectAllRows)=\"selectAllRows.emit($event)\">\r\n</tr>\r\n\r\n<tr ng2-st-thead-filters-row *ngIf=\"!isHideSubHeader\"\r\n                              class=\"ng2-smart-filters\"\r\n                              [grid]=\"grid\"\r\n                              [source]=\"source\"\r\n                              (create)=\"create.emit($event)\"\r\n                              (filter)=\"filter.emit($event)\">\r\n</tr>\r\n\r\n<tr ng2-st-thead-form-row *ngIf=\"grid.createFormShown\"\r\n                          [grid]=\"grid\"\r\n                          [createConfirm]=\"createConfirm\">\r\n</tr>\r\n"
    })
], Ng2SmartTableTheadComponent);
export { Ng2SmartTableTheadComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGhlYWQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmcyLXNtYXJ0LXRhYmxlLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvdGhlYWQvdGhlYWQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFZLE1BQU0sZUFBZSxDQUFDO0FBRWhGLE9BQU8sRUFBRSxJQUFJLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUN0QyxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sbUNBQW1DLENBQUM7QUFNL0QsSUFBYSwyQkFBMkIsR0FBeEMsTUFBYSwyQkFBMkI7SUFKeEM7UUFXYyxTQUFJLEdBQUcsSUFBSSxZQUFZLEVBQU8sQ0FBQztRQUMvQixrQkFBYSxHQUFHLElBQUksWUFBWSxFQUFPLENBQUM7UUFDeEMsV0FBTSxHQUFHLElBQUksWUFBWSxFQUFPLENBQUM7UUFDakMsV0FBTSxHQUFHLElBQUksWUFBWSxFQUFPLENBQUM7SUFTL0MsQ0FBQztJQUpDLFdBQVc7UUFDUCxJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLFlBQVksQ0FBQyxDQUFDO1FBQ3ZELElBQUksQ0FBQyxlQUFlLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsZUFBZSxDQUFDLENBQUM7SUFDL0QsQ0FBQztDQUNKLENBQUE7QUFqQlk7SUFBUixLQUFLLEVBQUU7c0NBQU8sSUFBSTt5REFBQztBQUNYO0lBQVIsS0FBSyxFQUFFO3NDQUFTLFVBQVU7MkRBQUM7QUFDbkI7SUFBUixLQUFLLEVBQUU7O2tFQUF3QjtBQUN2QjtJQUFSLEtBQUssRUFBRTtzQ0FBZ0IsWUFBWTtrRUFBTTtBQUVoQztJQUFULE1BQU0sRUFBRTs7eURBQWdDO0FBQy9CO0lBQVQsTUFBTSxFQUFFOztrRUFBeUM7QUFDeEM7SUFBVCxNQUFNLEVBQUU7OzJEQUFrQztBQUNqQztJQUFULE1BQU0sRUFBRTs7MkRBQWtDO0FBVmxDLDJCQUEyQjtJQUp2QyxTQUFTLENBQUM7UUFDUCxRQUFRLEVBQUUsZ0JBQWdCO1FBQzFCLDA5QkFBcUM7S0FDeEMsQ0FBQztHQUNXLDJCQUEyQixDQW1CdkM7U0FuQlksMkJBQTJCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIElucHV0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciwgT25DaGFuZ2VzfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbmltcG9ydCB7IEdyaWQgfSBmcm9tICcuLi8uLi9saWIvZ3JpZCc7XHJcbmltcG9ydCB7IERhdGFTb3VyY2UgfSBmcm9tICcuLi8uLi9saWIvZGF0YS1zb3VyY2UvZGF0YS1zb3VyY2UnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ1tuZzItc3QtdGhlYWRdJyxcclxuICAgIHRlbXBsYXRlVXJsOiAnLi90aGVhZC5jb21wb25lbnQuaHRtbCcsXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBOZzJTbWFydFRhYmxlVGhlYWRDb21wb25lbnQgaW1wbGVtZW50cyBPbkNoYW5nZXMge1xyXG5cclxuICAgIEBJbnB1dCgpIGdyaWQ6IEdyaWQ7XHJcbiAgICBASW5wdXQoKSBzb3VyY2U6IERhdGFTb3VyY2U7XHJcbiAgICBASW5wdXQoKSBpc0FsbFNlbGVjdGVkOiBib29sZWFuO1xyXG4gICAgQElucHV0KCkgY3JlYXRlQ29uZmlybTogRXZlbnRFbWl0dGVyPGFueT47XHJcblxyXG4gICAgQE91dHB1dCgpIHNvcnQgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcclxuICAgIEBPdXRwdXQoKSBzZWxlY3RBbGxSb3dzID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XHJcbiAgICBAT3V0cHV0KCkgY3JlYXRlID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XHJcbiAgICBAT3V0cHV0KCkgZmlsdGVyID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XHJcblxyXG4gICAgaXNIaWRlSGVhZGVyOiBib29sZWFuO1xyXG4gICAgaXNIaWRlU3ViSGVhZGVyOiBib29sZWFuO1xyXG5cclxuICBuZ09uQ2hhbmdlcygpIHtcclxuICAgICAgdGhpcy5pc0hpZGVIZWFkZXIgPSB0aGlzLmdyaWQuZ2V0U2V0dGluZygnaGlkZUhlYWRlcicpO1xyXG4gICAgICB0aGlzLmlzSGlkZVN1YkhlYWRlciA9IHRoaXMuZ3JpZC5nZXRTZXR0aW5nKCdoaWRlU3ViSGVhZGVyJyk7XHJcbiAgICB9XHJcbn1cclxuIl19