import * as tslib_1 from "tslib";
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { DataSource } from '../../../../lib/data-source/data-source';
import { Column } from '../../../../lib/data-set/column';
var TitleComponent = /** @class */ (function () {
    function TitleComponent() {
        this.currentDirection = '';
        this.sort = new EventEmitter();
    }
    TitleComponent.prototype.ngOnChanges = function (changes) {
        var _this = this;
        if (changes.source) {
            if (!changes.source.firstChange) {
                this.dataChangedSub.unsubscribe();
            }
            this.dataChangedSub = this.source.onChanged().subscribe(function (dataChanges) {
                var sortConf = _this.source.getSort();
                if (sortConf.length > 0 && sortConf[0]['field'] === _this.column.id) {
                    _this.currentDirection = sortConf[0]['direction'];
                }
                else {
                    _this.currentDirection = '';
                }
                sortConf.forEach(function (fieldConf) {
                });
            });
        }
    };
    TitleComponent.prototype._sort = function (event) {
        event.preventDefault();
        this.changeSortDirection();
        this.source.setSort([
            {
                field: this.column.id,
                direction: this.currentDirection,
                compare: this.column.getCompareFunction(),
            },
        ]);
        this.sort.emit(null);
    };
    TitleComponent.prototype.changeSortDirection = function () {
        if (this.currentDirection) {
            var newDirection = this.currentDirection === 'asc' ? 'desc' : 'asc';
            this.currentDirection = newDirection;
        }
        else {
            this.currentDirection = this.column.sortDirection;
        }
        return this.currentDirection;
    };
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Column)
    ], TitleComponent.prototype, "column", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", DataSource)
    ], TitleComponent.prototype, "source", void 0);
    tslib_1.__decorate([
        Output(),
        tslib_1.__metadata("design:type", Object)
    ], TitleComponent.prototype, "sort", void 0);
    TitleComponent = tslib_1.__decorate([
        Component({
            selector: 'ng2-smart-table-title',
            template: "\n    <a href=\"#\" *ngIf=\"column.isSortable\"\n                (click)=\"_sort($event)\"\n                class=\"ng2-smart-sort-link sort\"\n                [ngClass]=\"currentDirection\">\n      {{ column.title }}\n    </a>\n    <span class=\"ng2-smart-sort\" *ngIf=\"!column.isSortable\">{{ column.title }}</span>\n  ",
            styles: ["a.sort.asc,a.sort.desc{font-weight:700}a.sort.asc::after,a.sort.desc::after{content:\"\";display:inline-block;width:0;height:0;border-bottom:4px solid rgba(0,0,0,.3);border-top:4px solid transparent;border-left:4px solid transparent;border-right:4px solid transparent;margin-bottom:2px}a.sort.desc::after{-webkit-transform:rotate(-180deg);transform:rotate(-180deg);margin-bottom:-2px}"]
        })
    ], TitleComponent);
    return TitleComponent;
}());
export { TitleComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGl0bGUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmcyLXNtYXJ0LXRhYmxlLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvdGhlYWQvY2VsbHMvdGl0bGUvdGl0bGUuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUE0QixNQUFNLGVBQWUsQ0FBQztBQUdqRyxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0seUNBQXlDLENBQUM7QUFDckUsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLGlDQUFpQyxDQUFDO0FBZXpEO0lBYkE7UUFlRSxxQkFBZ0IsR0FBRyxFQUFFLENBQUM7UUFHWixTQUFJLEdBQUcsSUFBSSxZQUFZLEVBQU8sQ0FBQztJQStDM0MsQ0FBQztJQTNDQyxvQ0FBVyxHQUFYLFVBQVksT0FBc0I7UUFBbEMsaUJBbUJDO1FBbEJDLElBQUksT0FBTyxDQUFDLE1BQU0sRUFBRTtZQUNsQixJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxXQUFXLEVBQUU7Z0JBQy9CLElBQUksQ0FBQyxjQUFjLENBQUMsV0FBVyxFQUFFLENBQUM7YUFDbkM7WUFDRCxJQUFJLENBQUMsY0FBYyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsU0FBUyxFQUFFLENBQUMsU0FBUyxDQUFDLFVBQUMsV0FBVztnQkFDbEUsSUFBTSxRQUFRLEdBQUcsS0FBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLEVBQUUsQ0FBQztnQkFFdkMsSUFBSSxRQUFRLENBQUMsTUFBTSxHQUFHLENBQUMsSUFBSSxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLEtBQUssS0FBSSxDQUFDLE1BQU0sQ0FBQyxFQUFFLEVBQUU7b0JBQ2xFLEtBQUksQ0FBQyxnQkFBZ0IsR0FBRyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsV0FBVyxDQUFDLENBQUM7aUJBQ2xEO3FCQUFNO29CQUNMLEtBQUksQ0FBQyxnQkFBZ0IsR0FBRyxFQUFFLENBQUM7aUJBQzVCO2dCQUVELFFBQVEsQ0FBQyxPQUFPLENBQUMsVUFBQyxTQUFjO2dCQUVoQyxDQUFDLENBQUMsQ0FBQztZQUNMLENBQUMsQ0FBQyxDQUFDO1NBQ0o7SUFDSCxDQUFDO0lBRUQsOEJBQUssR0FBTCxVQUFNLEtBQVU7UUFDZCxLQUFLLENBQUMsY0FBYyxFQUFFLENBQUM7UUFDdkIsSUFBSSxDQUFDLG1CQUFtQixFQUFFLENBQUM7UUFDM0IsSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUM7WUFDbEI7Z0JBQ0UsS0FBSyxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsRUFBRTtnQkFDckIsU0FBUyxFQUFFLElBQUksQ0FBQyxnQkFBZ0I7Z0JBQ2hDLE9BQU8sRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLGtCQUFrQixFQUFFO2FBQzFDO1NBQ0YsQ0FBQyxDQUFDO1FBQ0gsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDdkIsQ0FBQztJQUVELDRDQUFtQixHQUFuQjtRQUNFLElBQUksSUFBSSxDQUFDLGdCQUFnQixFQUFFO1lBQ3pCLElBQU0sWUFBWSxHQUFHLElBQUksQ0FBQyxnQkFBZ0IsS0FBSyxLQUFLLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDO1lBQ3RFLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxZQUFZLENBQUM7U0FDdEM7YUFBTTtZQUNMLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLGFBQWEsQ0FBQztTQUNuRDtRQUNELE9BQU8sSUFBSSxDQUFDLGdCQUFnQixDQUFDO0lBQy9CLENBQUM7SUFoRFE7UUFBUixLQUFLLEVBQUU7MENBQVMsTUFBTTtrREFBQztJQUNmO1FBQVIsS0FBSyxFQUFFOzBDQUFTLFVBQVU7a0RBQUM7SUFDbEI7UUFBVCxNQUFNLEVBQUU7O2dEQUFnQztJQUw5QixjQUFjO1FBYjFCLFNBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSx1QkFBdUI7WUFFakMsUUFBUSxFQUFFLG9VQVFUOztTQUNGLENBQUM7T0FDVyxjQUFjLENBb0QxQjtJQUFELHFCQUFDO0NBQUEsQUFwREQsSUFvREM7U0FwRFksY0FBYyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyLCBPbkNoYW5nZXMsIFNpbXBsZUNoYW5nZXMgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XHJcblxyXG5pbXBvcnQgeyBEYXRhU291cmNlIH0gZnJvbSAnLi4vLi4vLi4vLi4vbGliL2RhdGEtc291cmNlL2RhdGEtc291cmNlJztcclxuaW1wb3J0IHsgQ29sdW1uIH0gZnJvbSAnLi4vLi4vLi4vLi4vbGliL2RhdGEtc2V0L2NvbHVtbic7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ25nMi1zbWFydC10YWJsZS10aXRsZScsXHJcbiAgc3R5bGVVcmxzOiBbJy4vdGl0bGUuY29tcG9uZW50LnNjc3MnXSxcclxuICB0ZW1wbGF0ZTogYFxyXG4gICAgPGEgaHJlZj1cIiNcIiAqbmdJZj1cImNvbHVtbi5pc1NvcnRhYmxlXCJcclxuICAgICAgICAgICAgICAgIChjbGljayk9XCJfc29ydCgkZXZlbnQpXCJcclxuICAgICAgICAgICAgICAgIGNsYXNzPVwibmcyLXNtYXJ0LXNvcnQtbGluayBzb3J0XCJcclxuICAgICAgICAgICAgICAgIFtuZ0NsYXNzXT1cImN1cnJlbnREaXJlY3Rpb25cIj5cclxuICAgICAge3sgY29sdW1uLnRpdGxlIH19XHJcbiAgICA8L2E+XHJcbiAgICA8c3BhbiBjbGFzcz1cIm5nMi1zbWFydC1zb3J0XCIgKm5nSWY9XCIhY29sdW1uLmlzU29ydGFibGVcIj57eyBjb2x1bW4udGl0bGUgfX08L3NwYW4+XHJcbiAgYCxcclxufSlcclxuZXhwb3J0IGNsYXNzIFRpdGxlQ29tcG9uZW50IGltcGxlbWVudHMgT25DaGFuZ2VzIHtcclxuXHJcbiAgY3VycmVudERpcmVjdGlvbiA9ICcnO1xyXG4gIEBJbnB1dCgpIGNvbHVtbjogQ29sdW1uO1xyXG4gIEBJbnB1dCgpIHNvdXJjZTogRGF0YVNvdXJjZTtcclxuICBAT3V0cHV0KCkgc29ydCA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xyXG5cclxuICBwcm90ZWN0ZWQgZGF0YUNoYW5nZWRTdWI6IFN1YnNjcmlwdGlvbjtcclxuXHJcbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcykge1xyXG4gICAgaWYgKGNoYW5nZXMuc291cmNlKSB7XHJcbiAgICAgIGlmICghY2hhbmdlcy5zb3VyY2UuZmlyc3RDaGFuZ2UpIHtcclxuICAgICAgICB0aGlzLmRhdGFDaGFuZ2VkU3ViLnVuc3Vic2NyaWJlKCk7XHJcbiAgICAgIH1cclxuICAgICAgdGhpcy5kYXRhQ2hhbmdlZFN1YiA9IHRoaXMuc291cmNlLm9uQ2hhbmdlZCgpLnN1YnNjcmliZSgoZGF0YUNoYW5nZXMpID0+IHtcclxuICAgICAgICBjb25zdCBzb3J0Q29uZiA9IHRoaXMuc291cmNlLmdldFNvcnQoKTtcclxuXHJcbiAgICAgICAgaWYgKHNvcnRDb25mLmxlbmd0aCA+IDAgJiYgc29ydENvbmZbMF1bJ2ZpZWxkJ10gPT09IHRoaXMuY29sdW1uLmlkKSB7XHJcbiAgICAgICAgICB0aGlzLmN1cnJlbnREaXJlY3Rpb24gPSBzb3J0Q29uZlswXVsnZGlyZWN0aW9uJ107XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHRoaXMuY3VycmVudERpcmVjdGlvbiA9ICcnO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgc29ydENvbmYuZm9yRWFjaCgoZmllbGRDb25mOiBhbnkpID0+IHtcclxuXHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgX3NvcnQoZXZlbnQ6IGFueSkge1xyXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgIHRoaXMuY2hhbmdlU29ydERpcmVjdGlvbigpO1xyXG4gICAgdGhpcy5zb3VyY2Uuc2V0U29ydChbXHJcbiAgICAgIHtcclxuICAgICAgICBmaWVsZDogdGhpcy5jb2x1bW4uaWQsXHJcbiAgICAgICAgZGlyZWN0aW9uOiB0aGlzLmN1cnJlbnREaXJlY3Rpb24sXHJcbiAgICAgICAgY29tcGFyZTogdGhpcy5jb2x1bW4uZ2V0Q29tcGFyZUZ1bmN0aW9uKCksXHJcbiAgICAgIH0sXHJcbiAgICBdKTtcclxuICAgIHRoaXMuc29ydC5lbWl0KG51bGwpO1xyXG4gIH1cclxuXHJcbiAgY2hhbmdlU29ydERpcmVjdGlvbigpOiBzdHJpbmcge1xyXG4gICAgaWYgKHRoaXMuY3VycmVudERpcmVjdGlvbikge1xyXG4gICAgICBjb25zdCBuZXdEaXJlY3Rpb24gPSB0aGlzLmN1cnJlbnREaXJlY3Rpb24gPT09ICdhc2MnID8gJ2Rlc2MnIDogJ2FzYyc7XHJcbiAgICAgIHRoaXMuY3VycmVudERpcmVjdGlvbiA9IG5ld0RpcmVjdGlvbjtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuY3VycmVudERpcmVjdGlvbiA9IHRoaXMuY29sdW1uLnNvcnREaXJlY3Rpb247XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdGhpcy5jdXJyZW50RGlyZWN0aW9uO1xyXG4gIH1cclxufVxyXG4iXX0=