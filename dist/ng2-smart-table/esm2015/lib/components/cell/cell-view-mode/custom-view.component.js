import * as tslib_1 from "tslib";
import { Component, Input, ComponentFactoryResolver, ViewChild, ViewContainerRef, } from '@angular/core';
import { Cell } from '../../../lib/data-set/cell';
let CustomViewComponent = class CustomViewComponent {
    constructor(resolver) {
        this.resolver = resolver;
    }
    ngOnInit() {
        if (this.cell && !this.customComponent) {
            this.createCustomComponent();
            this.callOnComponentInit();
            this.patchInstance();
        }
    }
    ngOnDestroy() {
        if (this.customComponent) {
            this.customComponent.destroy();
        }
    }
    createCustomComponent() {
        const componentFactory = this.resolver.resolveComponentFactory(this.cell.getColumn().renderComponent);
        this.customComponent = this.dynamicTarget.createComponent(componentFactory);
    }
    callOnComponentInit() {
        const onComponentInitFunction = this.cell.getColumn().getOnComponentInitFunction();
        onComponentInitFunction && onComponentInitFunction(this.customComponent.instance, this.getPatch());
    }
    patchInstance() {
        Object.assign(this.customComponent.instance, this.getPatch());
    }
    getPatch() {
        return {
            value: this.cell.getValue(),
            rowData: this.cell.getRow().getData()
        };
    }
};
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Cell)
], CustomViewComponent.prototype, "cell", void 0);
tslib_1.__decorate([
    ViewChild('dynamicTarget', { read: ViewContainerRef, static: true }),
    tslib_1.__metadata("design:type", Object)
], CustomViewComponent.prototype, "dynamicTarget", void 0);
CustomViewComponent = tslib_1.__decorate([
    Component({
        selector: 'custom-view-component',
        template: `
    <ng-template #dynamicTarget></ng-template>
  `
    }),
    tslib_1.__metadata("design:paramtypes", [ComponentFactoryResolver])
], CustomViewComponent);
export { CustomViewComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3VzdG9tLXZpZXcuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmcyLXNtYXJ0LXRhYmxlLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvY2VsbC9jZWxsLXZpZXctbW9kZS9jdXN0b20tdmlldy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFDTCxTQUFTLEVBQ1QsS0FBSyxFQUNMLHdCQUF3QixFQUN4QixTQUFTLEVBQ1QsZ0JBQWdCLEdBR2pCLE1BQU0sZUFBZSxDQUFDO0FBRXZCLE9BQU8sRUFBRSxJQUFJLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQVNsRCxJQUFhLG1CQUFtQixHQUFoQyxNQUFhLG1CQUFtQjtJQU05QixZQUFvQixRQUFrQztRQUFsQyxhQUFRLEdBQVIsUUFBUSxDQUEwQjtJQUN0RCxDQUFDO0lBRUQsUUFBUTtRQUNOLElBQUksSUFBSSxDQUFDLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxlQUFlLEVBQUU7WUFDdEMsSUFBSSxDQUFDLHFCQUFxQixFQUFFLENBQUM7WUFDN0IsSUFBSSxDQUFDLG1CQUFtQixFQUFFLENBQUM7WUFDM0IsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO1NBQ3RCO0lBQ0gsQ0FBQztJQUVELFdBQVc7UUFDVCxJQUFJLElBQUksQ0FBQyxlQUFlLEVBQUU7WUFDeEIsSUFBSSxDQUFDLGVBQWUsQ0FBQyxPQUFPLEVBQUUsQ0FBQztTQUNoQztJQUNILENBQUM7SUFFUyxxQkFBcUI7UUFDN0IsTUFBTSxnQkFBZ0IsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLHVCQUF1QixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUMsZUFBZSxDQUFDLENBQUM7UUFDdEcsSUFBSSxDQUFDLGVBQWUsR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLGVBQWUsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO0lBQzlFLENBQUM7SUFFUyxtQkFBbUI7UUFDM0IsTUFBTSx1QkFBdUIsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDLDBCQUEwQixFQUFFLENBQUM7UUFDbkYsdUJBQXVCLElBQUksdUJBQXVCLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUM7SUFDckcsQ0FBQztJQUVTLGFBQWE7UUFDckIsTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQztJQUNoRSxDQUFDO0lBRVMsUUFBUTtRQUNoQixPQUFPO1lBQ0wsS0FBSyxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFO1lBQzNCLE9BQU8sRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDLE9BQU8sRUFBRTtTQUN0QyxDQUFBO0lBQ0gsQ0FBQztDQUNGLENBQUE7QUF4Q1U7SUFBUixLQUFLLEVBQUU7c0NBQU8sSUFBSTtpREFBQztBQUNrRDtJQUFyRSxTQUFTLENBQUMsZUFBZSxFQUFFLEVBQUUsSUFBSSxFQUFFLGdCQUFnQixFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUUsQ0FBQzs7MERBQW9CO0FBSjlFLG1CQUFtQjtJQU4vQixTQUFTLENBQUM7UUFDVCxRQUFRLEVBQUUsdUJBQXVCO1FBQ2pDLFFBQVEsRUFBRTs7R0FFVDtLQUNGLENBQUM7NkNBTzhCLHdCQUF3QjtHQU4zQyxtQkFBbUIsQ0EyQy9CO1NBM0NZLG1CQUFtQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XHJcbiAgQ29tcG9uZW50LFxyXG4gIElucHV0LFxyXG4gIENvbXBvbmVudEZhY3RvcnlSZXNvbHZlcixcclxuICBWaWV3Q2hpbGQsXHJcbiAgVmlld0NvbnRhaW5lclJlZixcclxuICBPbkluaXQsXHJcbiAgT25EZXN0cm95LFxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuaW1wb3J0IHsgQ2VsbCB9IGZyb20gJy4uLy4uLy4uL2xpYi9kYXRhLXNldC9jZWxsJztcclxuaW1wb3J0IHsgVmlld0NlbGwgfSBmcm9tICcuL3ZpZXctY2VsbCc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2N1c3RvbS12aWV3LWNvbXBvbmVudCcsXHJcbiAgdGVtcGxhdGU6IGBcclxuICAgIDxuZy10ZW1wbGF0ZSAjZHluYW1pY1RhcmdldD48L25nLXRlbXBsYXRlPlxyXG4gIGAsXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBDdXN0b21WaWV3Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xyXG5cclxuICBjdXN0b21Db21wb25lbnQ6IGFueTtcclxuICBASW5wdXQoKSBjZWxsOiBDZWxsO1xyXG4gIEBWaWV3Q2hpbGQoJ2R5bmFtaWNUYXJnZXQnLCB7IHJlYWQ6IFZpZXdDb250YWluZXJSZWYsIHN0YXRpYzogdHJ1ZSB9KSBkeW5hbWljVGFyZ2V0OiBhbnk7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgcmVzb2x2ZXI6IENvbXBvbmVudEZhY3RvcnlSZXNvbHZlcikge1xyXG4gIH1cclxuXHJcbiAgbmdPbkluaXQoKSB7XHJcbiAgICBpZiAodGhpcy5jZWxsICYmICF0aGlzLmN1c3RvbUNvbXBvbmVudCkge1xyXG4gICAgICB0aGlzLmNyZWF0ZUN1c3RvbUNvbXBvbmVudCgpO1xyXG4gICAgICB0aGlzLmNhbGxPbkNvbXBvbmVudEluaXQoKTtcclxuICAgICAgdGhpcy5wYXRjaEluc3RhbmNlKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBuZ09uRGVzdHJveSgpIHtcclxuICAgIGlmICh0aGlzLmN1c3RvbUNvbXBvbmVudCkge1xyXG4gICAgICB0aGlzLmN1c3RvbUNvbXBvbmVudC5kZXN0cm95KCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcm90ZWN0ZWQgY3JlYXRlQ3VzdG9tQ29tcG9uZW50KCkge1xyXG4gICAgY29uc3QgY29tcG9uZW50RmFjdG9yeSA9IHRoaXMucmVzb2x2ZXIucmVzb2x2ZUNvbXBvbmVudEZhY3RvcnkodGhpcy5jZWxsLmdldENvbHVtbigpLnJlbmRlckNvbXBvbmVudCk7XHJcbiAgICB0aGlzLmN1c3RvbUNvbXBvbmVudCA9IHRoaXMuZHluYW1pY1RhcmdldC5jcmVhdGVDb21wb25lbnQoY29tcG9uZW50RmFjdG9yeSk7XHJcbiAgfVxyXG5cclxuICBwcm90ZWN0ZWQgY2FsbE9uQ29tcG9uZW50SW5pdCgpIHtcclxuICAgIGNvbnN0IG9uQ29tcG9uZW50SW5pdEZ1bmN0aW9uID0gdGhpcy5jZWxsLmdldENvbHVtbigpLmdldE9uQ29tcG9uZW50SW5pdEZ1bmN0aW9uKCk7XHJcbiAgICBvbkNvbXBvbmVudEluaXRGdW5jdGlvbiAmJiBvbkNvbXBvbmVudEluaXRGdW5jdGlvbih0aGlzLmN1c3RvbUNvbXBvbmVudC5pbnN0YW5jZSwgdGhpcy5nZXRQYXRjaCgpKTtcclxuICB9XHJcblxyXG4gIHByb3RlY3RlZCBwYXRjaEluc3RhbmNlKCkge1xyXG4gICAgT2JqZWN0LmFzc2lnbih0aGlzLmN1c3RvbUNvbXBvbmVudC5pbnN0YW5jZSwgdGhpcy5nZXRQYXRjaCgpKTtcclxuICB9XHJcblxyXG4gIHByb3RlY3RlZCBnZXRQYXRjaCgpOiBWaWV3Q2VsbCB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICB2YWx1ZTogdGhpcy5jZWxsLmdldFZhbHVlKCksXHJcbiAgICAgIHJvd0RhdGE6IHRoaXMuY2VsbC5nZXRSb3coKS5nZXREYXRhKClcclxuICAgIH1cclxuICB9XHJcbn1cclxuIl19