import * as tslib_1 from "tslib";
import { Component, Input, ComponentFactoryResolver, ViewChild, ViewContainerRef, } from '@angular/core';
import { Cell } from '../../../lib/data-set/cell';
var CustomViewComponent = /** @class */ (function () {
    function CustomViewComponent(resolver) {
        this.resolver = resolver;
    }
    CustomViewComponent.prototype.ngOnInit = function () {
        if (this.cell && !this.customComponent) {
            this.createCustomComponent();
            this.callOnComponentInit();
            this.patchInstance();
        }
    };
    CustomViewComponent.prototype.ngOnDestroy = function () {
        if (this.customComponent) {
            this.customComponent.destroy();
        }
    };
    CustomViewComponent.prototype.createCustomComponent = function () {
        var componentFactory = this.resolver.resolveComponentFactory(this.cell.getColumn().renderComponent);
        this.customComponent = this.dynamicTarget.createComponent(componentFactory);
    };
    CustomViewComponent.prototype.callOnComponentInit = function () {
        var onComponentInitFunction = this.cell.getColumn().getOnComponentInitFunction();
        onComponentInitFunction && onComponentInitFunction(this.customComponent.instance, this.getPatch());
    };
    CustomViewComponent.prototype.patchInstance = function () {
        Object.assign(this.customComponent.instance, this.getPatch());
    };
    CustomViewComponent.prototype.getPatch = function () {
        return {
            value: this.cell.getValue(),
            rowData: this.cell.getRow().getData()
        };
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
            template: "\n    <ng-template #dynamicTarget></ng-template>\n  "
        }),
        tslib_1.__metadata("design:paramtypes", [ComponentFactoryResolver])
    ], CustomViewComponent);
    return CustomViewComponent;
}());
export { CustomViewComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3VzdG9tLXZpZXcuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmcyLXNtYXJ0LXRhYmxlLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvY2VsbC9jZWxsLXZpZXctbW9kZS9jdXN0b20tdmlldy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFDTCxTQUFTLEVBQ1QsS0FBSyxFQUNMLHdCQUF3QixFQUN4QixTQUFTLEVBQ1QsZ0JBQWdCLEdBR2pCLE1BQU0sZUFBZSxDQUFDO0FBRXZCLE9BQU8sRUFBRSxJQUFJLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQVNsRDtJQU1FLDZCQUFvQixRQUFrQztRQUFsQyxhQUFRLEdBQVIsUUFBUSxDQUEwQjtJQUN0RCxDQUFDO0lBRUQsc0NBQVEsR0FBUjtRQUNFLElBQUksSUFBSSxDQUFDLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxlQUFlLEVBQUU7WUFDdEMsSUFBSSxDQUFDLHFCQUFxQixFQUFFLENBQUM7WUFDN0IsSUFBSSxDQUFDLG1CQUFtQixFQUFFLENBQUM7WUFDM0IsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO1NBQ3RCO0lBQ0gsQ0FBQztJQUVELHlDQUFXLEdBQVg7UUFDRSxJQUFJLElBQUksQ0FBQyxlQUFlLEVBQUU7WUFDeEIsSUFBSSxDQUFDLGVBQWUsQ0FBQyxPQUFPLEVBQUUsQ0FBQztTQUNoQztJQUNILENBQUM7SUFFUyxtREFBcUIsR0FBL0I7UUFDRSxJQUFNLGdCQUFnQixHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsdUJBQXVCLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQyxlQUFlLENBQUMsQ0FBQztRQUN0RyxJQUFJLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsZUFBZSxDQUFDLGdCQUFnQixDQUFDLENBQUM7SUFDOUUsQ0FBQztJQUVTLGlEQUFtQixHQUE3QjtRQUNFLElBQU0sdUJBQXVCLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQywwQkFBMEIsRUFBRSxDQUFDO1FBQ25GLHVCQUF1QixJQUFJLHVCQUF1QixDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDO0lBQ3JHLENBQUM7SUFFUywyQ0FBYSxHQUF2QjtRQUNFLE1BQU0sQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUM7SUFDaEUsQ0FBQztJQUVTLHNDQUFRLEdBQWxCO1FBQ0UsT0FBTztZQUNMLEtBQUssRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRTtZQUMzQixPQUFPLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQyxPQUFPLEVBQUU7U0FDdEMsQ0FBQTtJQUNILENBQUM7SUF2Q1E7UUFBUixLQUFLLEVBQUU7MENBQU8sSUFBSTtxREFBQztJQUNrRDtRQUFyRSxTQUFTLENBQUMsZUFBZSxFQUFFLEVBQUUsSUFBSSxFQUFFLGdCQUFnQixFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUUsQ0FBQzs7OERBQW9CO0lBSjlFLG1CQUFtQjtRQU4vQixTQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsdUJBQXVCO1lBQ2pDLFFBQVEsRUFBRSxzREFFVDtTQUNGLENBQUM7aURBTzhCLHdCQUF3QjtPQU4zQyxtQkFBbUIsQ0EyQy9CO0lBQUQsMEJBQUM7Q0FBQSxBQTNDRCxJQTJDQztTQTNDWSxtQkFBbUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xyXG4gIENvbXBvbmVudCxcclxuICBJbnB1dCxcclxuICBDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIsXHJcbiAgVmlld0NoaWxkLFxyXG4gIFZpZXdDb250YWluZXJSZWYsXHJcbiAgT25Jbml0LFxyXG4gIE9uRGVzdHJveSxcclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbmltcG9ydCB7IENlbGwgfSBmcm9tICcuLi8uLi8uLi9saWIvZGF0YS1zZXQvY2VsbCc7XHJcbmltcG9ydCB7IFZpZXdDZWxsIH0gZnJvbSAnLi92aWV3LWNlbGwnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdjdXN0b20tdmlldy1jb21wb25lbnQnLFxyXG4gIHRlbXBsYXRlOiBgXHJcbiAgICA8bmctdGVtcGxhdGUgI2R5bmFtaWNUYXJnZXQ+PC9uZy10ZW1wbGF0ZT5cclxuICBgLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgQ3VzdG9tVmlld0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcclxuXHJcbiAgY3VzdG9tQ29tcG9uZW50OiBhbnk7XHJcbiAgQElucHV0KCkgY2VsbDogQ2VsbDtcclxuICBAVmlld0NoaWxkKCdkeW5hbWljVGFyZ2V0JywgeyByZWFkOiBWaWV3Q29udGFpbmVyUmVmLCBzdGF0aWM6IHRydWUgfSkgZHluYW1pY1RhcmdldDogYW55O1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJlc29sdmVyOiBDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIpIHtcclxuICB9XHJcblxyXG4gIG5nT25Jbml0KCkge1xyXG4gICAgaWYgKHRoaXMuY2VsbCAmJiAhdGhpcy5jdXN0b21Db21wb25lbnQpIHtcclxuICAgICAgdGhpcy5jcmVhdGVDdXN0b21Db21wb25lbnQoKTtcclxuICAgICAgdGhpcy5jYWxsT25Db21wb25lbnRJbml0KCk7XHJcbiAgICAgIHRoaXMucGF0Y2hJbnN0YW5jZSgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgbmdPbkRlc3Ryb3koKSB7XHJcbiAgICBpZiAodGhpcy5jdXN0b21Db21wb25lbnQpIHtcclxuICAgICAgdGhpcy5jdXN0b21Db21wb25lbnQuZGVzdHJveSgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHJvdGVjdGVkIGNyZWF0ZUN1c3RvbUNvbXBvbmVudCgpIHtcclxuICAgIGNvbnN0IGNvbXBvbmVudEZhY3RvcnkgPSB0aGlzLnJlc29sdmVyLnJlc29sdmVDb21wb25lbnRGYWN0b3J5KHRoaXMuY2VsbC5nZXRDb2x1bW4oKS5yZW5kZXJDb21wb25lbnQpO1xyXG4gICAgdGhpcy5jdXN0b21Db21wb25lbnQgPSB0aGlzLmR5bmFtaWNUYXJnZXQuY3JlYXRlQ29tcG9uZW50KGNvbXBvbmVudEZhY3RvcnkpO1xyXG4gIH1cclxuXHJcbiAgcHJvdGVjdGVkIGNhbGxPbkNvbXBvbmVudEluaXQoKSB7XHJcbiAgICBjb25zdCBvbkNvbXBvbmVudEluaXRGdW5jdGlvbiA9IHRoaXMuY2VsbC5nZXRDb2x1bW4oKS5nZXRPbkNvbXBvbmVudEluaXRGdW5jdGlvbigpO1xyXG4gICAgb25Db21wb25lbnRJbml0RnVuY3Rpb24gJiYgb25Db21wb25lbnRJbml0RnVuY3Rpb24odGhpcy5jdXN0b21Db21wb25lbnQuaW5zdGFuY2UsIHRoaXMuZ2V0UGF0Y2goKSk7XHJcbiAgfVxyXG5cclxuICBwcm90ZWN0ZWQgcGF0Y2hJbnN0YW5jZSgpIHtcclxuICAgIE9iamVjdC5hc3NpZ24odGhpcy5jdXN0b21Db21wb25lbnQuaW5zdGFuY2UsIHRoaXMuZ2V0UGF0Y2goKSk7XHJcbiAgfVxyXG5cclxuICBwcm90ZWN0ZWQgZ2V0UGF0Y2goKTogVmlld0NlbGwge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgdmFsdWU6IHRoaXMuY2VsbC5nZXRWYWx1ZSgpLFxyXG4gICAgICByb3dEYXRhOiB0aGlzLmNlbGwuZ2V0Um93KCkuZ2V0RGF0YSgpXHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiJdfQ==