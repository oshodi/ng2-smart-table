import * as tslib_1 from "tslib";
import { Component, ComponentFactoryResolver, Input, ViewChild, ViewContainerRef } from '@angular/core';
import { FilterDefault } from './filter-default';
let CustomFilterComponent = class CustomFilterComponent extends FilterDefault {
    constructor(resolver) {
        super();
        this.resolver = resolver;
    }
    ngOnChanges(changes) {
        if (this.column && !this.customComponent) {
            const componentFactory = this.resolver.resolveComponentFactory(this.column.filter.component);
            this.customComponent = this.dynamicTarget.createComponent(componentFactory);
            // set @Inputs and @Outputs of custom component
            this.customComponent.instance.query = this.query;
            this.customComponent.instance.column = this.column;
            this.customComponent.instance.source = this.source;
            this.customComponent.instance.inputClass = this.inputClass;
            this.customComponent.instance.filter.subscribe((event) => this.onFilter(event));
        }
        if (this.customComponent) {
            this.customComponent.instance.ngOnChanges(changes);
        }
    }
    ngOnDestroy() {
        if (this.customComponent) {
            this.customComponent.destroy();
        }
    }
};
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", String)
], CustomFilterComponent.prototype, "query", void 0);
tslib_1.__decorate([
    ViewChild('dynamicTarget', { read: ViewContainerRef, static: true }),
    tslib_1.__metadata("design:type", Object)
], CustomFilterComponent.prototype, "dynamicTarget", void 0);
CustomFilterComponent = tslib_1.__decorate([
    Component({
        selector: 'custom-table-filter',
        template: `<ng-template #dynamicTarget></ng-template>`
    }),
    tslib_1.__metadata("design:paramtypes", [ComponentFactoryResolver])
], CustomFilterComponent);
export { CustomFilterComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3VzdG9tLWZpbHRlci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZzItc21hcnQtdGFibGUvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9maWx0ZXIvY3VzdG9tLWZpbHRlci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFDTCxTQUFTLEVBQ1Qsd0JBQXdCLEVBQUUsS0FBSyxFQUkvQixTQUFTLEVBQ1QsZ0JBQWdCLEVBQ2pCLE1BQU0sZUFBZSxDQUFDO0FBRXZCLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQU1qRCxJQUFhLHFCQUFxQixHQUFsQyxNQUFhLHFCQUFzQixTQUFRLGFBQWE7SUFLdEQsWUFBb0IsUUFBa0M7UUFDcEQsS0FBSyxFQUFFLENBQUM7UUFEVSxhQUFRLEdBQVIsUUFBUSxDQUEwQjtJQUV0RCxDQUFDO0lBRUQsV0FBVyxDQUFDLE9BQXNCO1FBQ2hDLElBQUksSUFBSSxDQUFDLE1BQU0sSUFBSSxDQUFDLElBQUksQ0FBQyxlQUFlLEVBQUU7WUFDeEMsTUFBTSxnQkFBZ0IsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLHVCQUF1QixDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1lBQzdGLElBQUksQ0FBQyxlQUFlLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxlQUFlLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztZQUU1RSwrQ0FBK0M7WUFDL0MsSUFBSSxDQUFDLGVBQWUsQ0FBQyxRQUFRLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUM7WUFDakQsSUFBSSxDQUFDLGVBQWUsQ0FBQyxRQUFRLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUM7WUFDbkQsSUFBSSxDQUFDLGVBQWUsQ0FBQyxRQUFRLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUM7WUFDbkQsSUFBSSxDQUFDLGVBQWUsQ0FBQyxRQUFRLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUM7WUFDM0QsSUFBSSxDQUFDLGVBQWUsQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxDQUFDLEtBQVUsRUFBRSxFQUFFLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO1NBQ3RGO1FBQ0QsSUFBSSxJQUFJLENBQUMsZUFBZSxFQUFFO1lBQ3hCLElBQUksQ0FBQyxlQUFlLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsQ0FBQztTQUNwRDtJQUNILENBQUM7SUFFRCxXQUFXO1FBQ1QsSUFBSSxJQUFJLENBQUMsZUFBZSxFQUFFO1lBQ3hCLElBQUksQ0FBQyxlQUFlLENBQUMsT0FBTyxFQUFFLENBQUM7U0FDaEM7SUFDSCxDQUFDO0NBQ0YsQ0FBQTtBQTlCVTtJQUFSLEtBQUssRUFBRTs7b0RBQWU7QUFFK0M7SUFBckUsU0FBUyxDQUFDLGVBQWUsRUFBRSxFQUFFLElBQUksRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFLENBQUM7OzREQUFvQjtBQUg5RSxxQkFBcUI7SUFKakMsU0FBUyxDQUFDO1FBQ1QsUUFBUSxFQUFFLHFCQUFxQjtRQUMvQixRQUFRLEVBQUUsNENBQTRDO0tBQ3ZELENBQUM7NkNBTThCLHdCQUF3QjtHQUwzQyxxQkFBcUIsQ0ErQmpDO1NBL0JZLHFCQUFxQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XHJcbiAgQ29tcG9uZW50LFxyXG4gIENvbXBvbmVudEZhY3RvcnlSZXNvbHZlciwgSW5wdXQsXHJcbiAgT25DaGFuZ2VzLFxyXG4gIE9uRGVzdHJveSxcclxuICBTaW1wbGVDaGFuZ2VzLFxyXG4gIFZpZXdDaGlsZCxcclxuICBWaWV3Q29udGFpbmVyUmVmXHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5pbXBvcnQgeyBGaWx0ZXJEZWZhdWx0IH0gZnJvbSAnLi9maWx0ZXItZGVmYXVsdCc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2N1c3RvbS10YWJsZS1maWx0ZXInLFxyXG4gIHRlbXBsYXRlOiBgPG5nLXRlbXBsYXRlICNkeW5hbWljVGFyZ2V0PjwvbmctdGVtcGxhdGU+YCxcclxufSlcclxuZXhwb3J0IGNsYXNzIEN1c3RvbUZpbHRlckNvbXBvbmVudCBleHRlbmRzIEZpbHRlckRlZmF1bHQgaW1wbGVtZW50cyBPbkNoYW5nZXMsIE9uRGVzdHJveSB7XHJcbiAgQElucHV0KCkgcXVlcnk6IHN0cmluZztcclxuICBjdXN0b21Db21wb25lbnQ6IGFueTtcclxuICBAVmlld0NoaWxkKCdkeW5hbWljVGFyZ2V0JywgeyByZWFkOiBWaWV3Q29udGFpbmVyUmVmLCBzdGF0aWM6IHRydWUgfSkgZHluYW1pY1RhcmdldDogYW55O1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJlc29sdmVyOiBDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIpIHtcclxuICAgIHN1cGVyKCk7XHJcbiAgfVxyXG5cclxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKSB7XHJcbiAgICBpZiAodGhpcy5jb2x1bW4gJiYgIXRoaXMuY3VzdG9tQ29tcG9uZW50KSB7XHJcbiAgICAgIGNvbnN0IGNvbXBvbmVudEZhY3RvcnkgPSB0aGlzLnJlc29sdmVyLnJlc29sdmVDb21wb25lbnRGYWN0b3J5KHRoaXMuY29sdW1uLmZpbHRlci5jb21wb25lbnQpO1xyXG4gICAgICB0aGlzLmN1c3RvbUNvbXBvbmVudCA9IHRoaXMuZHluYW1pY1RhcmdldC5jcmVhdGVDb21wb25lbnQoY29tcG9uZW50RmFjdG9yeSk7XHJcblxyXG4gICAgICAvLyBzZXQgQElucHV0cyBhbmQgQE91dHB1dHMgb2YgY3VzdG9tIGNvbXBvbmVudFxyXG4gICAgICB0aGlzLmN1c3RvbUNvbXBvbmVudC5pbnN0YW5jZS5xdWVyeSA9IHRoaXMucXVlcnk7XHJcbiAgICAgIHRoaXMuY3VzdG9tQ29tcG9uZW50Lmluc3RhbmNlLmNvbHVtbiA9IHRoaXMuY29sdW1uO1xyXG4gICAgICB0aGlzLmN1c3RvbUNvbXBvbmVudC5pbnN0YW5jZS5zb3VyY2UgPSB0aGlzLnNvdXJjZTtcclxuICAgICAgdGhpcy5jdXN0b21Db21wb25lbnQuaW5zdGFuY2UuaW5wdXRDbGFzcyA9IHRoaXMuaW5wdXRDbGFzcztcclxuICAgICAgdGhpcy5jdXN0b21Db21wb25lbnQuaW5zdGFuY2UuZmlsdGVyLnN1YnNjcmliZSgoZXZlbnQ6IGFueSkgPT4gdGhpcy5vbkZpbHRlcihldmVudCkpO1xyXG4gICAgfVxyXG4gICAgaWYgKHRoaXMuY3VzdG9tQ29tcG9uZW50KSB7XHJcbiAgICAgIHRoaXMuY3VzdG9tQ29tcG9uZW50Lmluc3RhbmNlLm5nT25DaGFuZ2VzKGNoYW5nZXMpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgbmdPbkRlc3Ryb3koKSB7XHJcbiAgICBpZiAodGhpcy5jdXN0b21Db21wb25lbnQpIHtcclxuICAgICAgdGhpcy5jdXN0b21Db21wb25lbnQuZGVzdHJveSgpO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iXX0=