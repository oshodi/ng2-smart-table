import * as tslib_1 from "tslib";
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Grid } from './lib/grid';
import { DataSource } from './lib/data-source/data-source';
import { deepExtend } from './lib/helpers';
import { LocalDataSource } from './lib/data-source/local/local.data-source';
var Ng2SmartTableComponent = /** @class */ (function () {
    function Ng2SmartTableComponent() {
        this.settings = {};
        this.rowSelect = new EventEmitter();
        this.userRowSelect = new EventEmitter();
        this.delete = new EventEmitter();
        this.edit = new EventEmitter();
        this.create = new EventEmitter();
        this.custom = new EventEmitter();
        this.deleteConfirm = new EventEmitter();
        this.editConfirm = new EventEmitter();
        this.createConfirm = new EventEmitter();
        this.rowHover = new EventEmitter();
        this.defaultSettings = {
            mode: 'inline',
            selectMode: 'single',
            hideHeader: false,
            hideSubHeader: false,
            actions: {
                columnTitle: 'Actions',
                add: true,
                edit: true,
                delete: true,
                custom: [],
                position: 'left',
            },
            filter: {
                inputClass: '',
            },
            edit: {
                inputClass: '',
                editButtonContent: 'Edit',
                saveButtonContent: 'Update',
                cancelButtonContent: 'Cancel',
                confirmSave: false,
            },
            add: {
                inputClass: '',
                addButtonContent: 'Add New',
                createButtonContent: 'Create',
                cancelButtonContent: 'Cancel',
                confirmCreate: false,
            },
            delete: {
                deleteButtonContent: 'Delete',
                confirmDelete: false,
            },
            attr: {
                id: '',
                class: '',
            },
            noDataMessage: 'No data found',
            columns: {},
            pager: {
                display: true,
                perPage: 10,
            },
            rowClassFunction: function () { return ""; }
        };
        this.isAllSelected = false;
    }
    Ng2SmartTableComponent.prototype.ngOnChanges = function (changes) {
        if (this.grid) {
            if (changes['settings']) {
                this.grid.setSettings(this.prepareSettings());
            }
            if (changes['source']) {
                this.source = this.prepareSource();
                this.grid.setSource(this.source);
            }
        }
        else {
            this.initGrid();
        }
        this.tableId = this.grid.getSetting('attr.id');
        this.tableClass = this.grid.getSetting('attr.class');
        this.isHideHeader = this.grid.getSetting('hideHeader');
        this.isHideSubHeader = this.grid.getSetting('hideSubHeader');
        this.isPagerDisplay = this.grid.getSetting('pager.display');
        this.isPagerDisplay = this.grid.getSetting('pager.display');
        this.perPageSelect = this.grid.getSetting('pager.perPageSelect');
        this.rowClassFunction = this.grid.getSetting('rowClassFunction');
    };
    Ng2SmartTableComponent.prototype.editRowSelect = function (row) {
        if (this.grid.getSetting('selectMode') === 'multi') {
            this.onMultipleSelectRow(row);
        }
        else {
            this.onSelectRow(row);
        }
    };
    Ng2SmartTableComponent.prototype.onUserSelectRow = function (row) {
        if (this.grid.getSetting('selectMode') !== 'multi') {
            this.grid.selectRow(row);
            this.emitUserSelectRow(row);
            this.emitSelectRow(row);
        }
    };
    Ng2SmartTableComponent.prototype.onRowHover = function (row) {
        this.rowHover.emit(row);
    };
    Ng2SmartTableComponent.prototype.multipleSelectRow = function (row) {
        this.grid.multipleSelectRow(row);
        this.emitUserSelectRow(row);
        this.emitSelectRow(row);
    };
    Ng2SmartTableComponent.prototype.onSelectAllRows = function ($event) {
        this.isAllSelected = !this.isAllSelected;
        this.grid.selectAllRows(this.isAllSelected);
        this.emitUserSelectRow(null);
        this.emitSelectRow(null);
    };
    Ng2SmartTableComponent.prototype.onSelectRow = function (row) {
        this.grid.selectRow(row);
        this.emitSelectRow(row);
    };
    Ng2SmartTableComponent.prototype.onMultipleSelectRow = function (row) {
        this.emitSelectRow(row);
    };
    Ng2SmartTableComponent.prototype.initGrid = function () {
        var _this = this;
        this.source = this.prepareSource();
        this.grid = new Grid(this.source, this.prepareSettings());
        this.grid.onSelectRow().subscribe(function (row) { return _this.emitSelectRow(row); });
    };
    Ng2SmartTableComponent.prototype.prepareSource = function () {
        if (this.source instanceof DataSource) {
            return this.source;
        }
        else if (this.source instanceof Array) {
            return new LocalDataSource(this.source);
        }
        return new LocalDataSource();
    };
    Ng2SmartTableComponent.prototype.prepareSettings = function () {
        return deepExtend({}, this.defaultSettings, this.settings);
    };
    Ng2SmartTableComponent.prototype.changePage = function ($event) {
        this.resetAllSelector();
    };
    Ng2SmartTableComponent.prototype.sort = function ($event) {
        this.resetAllSelector();
    };
    Ng2SmartTableComponent.prototype.filter = function ($event) {
        this.resetAllSelector();
    };
    Ng2SmartTableComponent.prototype.resetAllSelector = function () {
        this.isAllSelected = false;
    };
    Ng2SmartTableComponent.prototype.emitUserSelectRow = function (row) {
        var selectedRows = this.grid.getSelectedRows();
        this.userRowSelect.emit({
            data: row ? row.getData() : null,
            isSelected: row ? row.getIsSelected() : null,
            source: this.source,
            selected: selectedRows && selectedRows.length ? selectedRows.map(function (r) { return r.getData(); }) : [],
        });
    };
    Ng2SmartTableComponent.prototype.emitSelectRow = function (row) {
        this.rowSelect.emit({
            data: row ? row.getData() : null,
            isSelected: row ? row.getIsSelected() : null,
            source: this.source,
        });
    };
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Object)
    ], Ng2SmartTableComponent.prototype, "source", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Object)
    ], Ng2SmartTableComponent.prototype, "settings", void 0);
    tslib_1.__decorate([
        Output(),
        tslib_1.__metadata("design:type", Object)
    ], Ng2SmartTableComponent.prototype, "rowSelect", void 0);
    tslib_1.__decorate([
        Output(),
        tslib_1.__metadata("design:type", Object)
    ], Ng2SmartTableComponent.prototype, "userRowSelect", void 0);
    tslib_1.__decorate([
        Output(),
        tslib_1.__metadata("design:type", Object)
    ], Ng2SmartTableComponent.prototype, "delete", void 0);
    tslib_1.__decorate([
        Output(),
        tslib_1.__metadata("design:type", Object)
    ], Ng2SmartTableComponent.prototype, "edit", void 0);
    tslib_1.__decorate([
        Output(),
        tslib_1.__metadata("design:type", Object)
    ], Ng2SmartTableComponent.prototype, "create", void 0);
    tslib_1.__decorate([
        Output(),
        tslib_1.__metadata("design:type", Object)
    ], Ng2SmartTableComponent.prototype, "custom", void 0);
    tslib_1.__decorate([
        Output(),
        tslib_1.__metadata("design:type", Object)
    ], Ng2SmartTableComponent.prototype, "deleteConfirm", void 0);
    tslib_1.__decorate([
        Output(),
        tslib_1.__metadata("design:type", Object)
    ], Ng2SmartTableComponent.prototype, "editConfirm", void 0);
    tslib_1.__decorate([
        Output(),
        tslib_1.__metadata("design:type", Object)
    ], Ng2SmartTableComponent.prototype, "createConfirm", void 0);
    tslib_1.__decorate([
        Output(),
        tslib_1.__metadata("design:type", EventEmitter)
    ], Ng2SmartTableComponent.prototype, "rowHover", void 0);
    Ng2SmartTableComponent = tslib_1.__decorate([
        Component({
            selector: 'ng2-smart-table',
            template: "<table [id]=\"tableId\" [ngClass]=\"tableClass\">\r\n\r\n  <thead ng2-st-thead *ngIf=\"!isHideHeader || !isHideSubHeader\"\r\n                      [grid]=\"grid\"\r\n                      [isAllSelected]=\"isAllSelected\"\r\n                      [source]=\"source\"\r\n                      [createConfirm]=\"createConfirm\"\r\n                      (create)=\"create.emit($event)\"\r\n                      (selectAllRows)=\"onSelectAllRows($event)\"\r\n                      (sort)=\"sort($event)\"\r\n                      (filter)=\"filter($event)\">\r\n  </thead>\r\n\r\n  <tbody ng2-st-tbody [grid]=\"grid\"\r\n                      [source]=\"source\"\r\n                      [deleteConfirm]=\"deleteConfirm\"\r\n                      [editConfirm]=\"editConfirm\"\r\n                      [rowClassFunction]=\"rowClassFunction\"\r\n                      (edit)=\"edit.emit($event)\"\r\n                      (delete)=\"delete.emit($event)\"\r\n                      (custom)=\"custom.emit($event)\"\r\n                      (userSelectRow)=\"onUserSelectRow($event)\"\r\n                      (editRowSelect)=\"editRowSelect($event)\"\r\n                      (multipleSelectRow)=\"multipleSelectRow($event)\"\r\n                      (rowHover)=\"onRowHover($event)\">\r\n  </tbody>\r\n\r\n</table>\r\n\r\n<ng2-smart-table-pager *ngIf=\"isPagerDisplay\"\r\n                        [source]=\"source\"\r\n                        [perPageSelect]=\"perPageSelect\"\r\n                        (changePage)=\"changePage($event)\">\r\n</ng2-smart-table-pager>\r\n",
            styles: [":host{font-size:1rem}:host ::ng-deep *{box-sizing:border-box}:host ::ng-deep button,:host ::ng-deep input,:host ::ng-deep optgroup,:host ::ng-deep select,:host ::ng-deep textarea{color:inherit;font:inherit;margin:0}:host ::ng-deep table{line-height:1.5em;border-collapse:collapse;border-spacing:0;display:table;width:100%;max-width:100%;overflow:auto;word-break:normal;word-break:keep-all}:host ::ng-deep table tr th{font-weight:700}:host ::ng-deep table tr section{font-size:.75em;font-weight:700}:host ::ng-deep table tr td,:host ::ng-deep table tr th{font-size:.875em;margin:0;padding:.5em 1em}:host ::ng-deep a{color:#1e6bb8;text-decoration:none}:host ::ng-deep a:hover{text-decoration:underline}"]
        })
    ], Ng2SmartTableComponent);
    return Ng2SmartTableComponent;
}());
export { Ng2SmartTableComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmcyLXNtYXJ0LXRhYmxlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nMi1zbWFydC10YWJsZS8iLCJzb3VyY2VzIjpbImxpYi9uZzItc21hcnQtdGFibGUuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQWdCLFlBQVksRUFBYSxNQUFNLGVBQWUsQ0FBQztBQUVoRyxPQUFPLEVBQUUsSUFBSSxFQUFFLE1BQU0sWUFBWSxDQUFDO0FBQ2xDLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQztBQUUzRCxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSwyQ0FBMkMsQ0FBQztBQU81RTtJQUxBO1FBUVcsYUFBUSxHQUFXLEVBQUUsQ0FBQztRQUVyQixjQUFTLEdBQUcsSUFBSSxZQUFZLEVBQU8sQ0FBQztRQUNwQyxrQkFBYSxHQUFHLElBQUksWUFBWSxFQUFPLENBQUM7UUFDeEMsV0FBTSxHQUFHLElBQUksWUFBWSxFQUFPLENBQUM7UUFDakMsU0FBSSxHQUFHLElBQUksWUFBWSxFQUFPLENBQUM7UUFDL0IsV0FBTSxHQUFHLElBQUksWUFBWSxFQUFPLENBQUM7UUFDakMsV0FBTSxHQUFHLElBQUksWUFBWSxFQUFPLENBQUM7UUFDakMsa0JBQWEsR0FBRyxJQUFJLFlBQVksRUFBTyxDQUFDO1FBQ3hDLGdCQUFXLEdBQUcsSUFBSSxZQUFZLEVBQU8sQ0FBQztRQUN0QyxrQkFBYSxHQUFHLElBQUksWUFBWSxFQUFPLENBQUM7UUFDeEMsYUFBUSxHQUFzQixJQUFJLFlBQVksRUFBTyxDQUFDO1FBWWhFLG9CQUFlLEdBQVc7WUFDeEIsSUFBSSxFQUFFLFFBQVE7WUFDZCxVQUFVLEVBQUUsUUFBUTtZQUNwQixVQUFVLEVBQUUsS0FBSztZQUNqQixhQUFhLEVBQUUsS0FBSztZQUNwQixPQUFPLEVBQUU7Z0JBQ1AsV0FBVyxFQUFFLFNBQVM7Z0JBQ3RCLEdBQUcsRUFBRSxJQUFJO2dCQUNULElBQUksRUFBRSxJQUFJO2dCQUNWLE1BQU0sRUFBRSxJQUFJO2dCQUNaLE1BQU0sRUFBRSxFQUFFO2dCQUNWLFFBQVEsRUFBRSxNQUFNO2FBQ2pCO1lBQ0QsTUFBTSxFQUFFO2dCQUNOLFVBQVUsRUFBRSxFQUFFO2FBQ2Y7WUFDRCxJQUFJLEVBQUU7Z0JBQ0osVUFBVSxFQUFFLEVBQUU7Z0JBQ2QsaUJBQWlCLEVBQUUsTUFBTTtnQkFDekIsaUJBQWlCLEVBQUUsUUFBUTtnQkFDM0IsbUJBQW1CLEVBQUUsUUFBUTtnQkFDN0IsV0FBVyxFQUFFLEtBQUs7YUFDbkI7WUFDRCxHQUFHLEVBQUU7Z0JBQ0gsVUFBVSxFQUFFLEVBQUU7Z0JBQ2QsZ0JBQWdCLEVBQUUsU0FBUztnQkFDM0IsbUJBQW1CLEVBQUUsUUFBUTtnQkFDN0IsbUJBQW1CLEVBQUUsUUFBUTtnQkFDN0IsYUFBYSxFQUFFLEtBQUs7YUFDckI7WUFDRCxNQUFNLEVBQUU7Z0JBQ04sbUJBQW1CLEVBQUUsUUFBUTtnQkFDN0IsYUFBYSxFQUFFLEtBQUs7YUFDckI7WUFDRCxJQUFJLEVBQUU7Z0JBQ0osRUFBRSxFQUFFLEVBQUU7Z0JBQ04sS0FBSyxFQUFFLEVBQUU7YUFDVjtZQUNELGFBQWEsRUFBRSxlQUFlO1lBQzlCLE9BQU8sRUFBRSxFQUFFO1lBQ1gsS0FBSyxFQUFFO2dCQUNMLE9BQU8sRUFBRSxJQUFJO2dCQUNiLE9BQU8sRUFBRSxFQUFFO2FBQ1o7WUFDRCxnQkFBZ0IsRUFBRSxjQUFNLE9BQUEsRUFBRSxFQUFGLENBQUU7U0FDM0IsQ0FBQztRQUVGLGtCQUFhLEdBQVksS0FBSyxDQUFDO0lBMEhqQyxDQUFDO0lBeEhDLDRDQUFXLEdBQVgsVUFBWSxPQUFpRDtRQUMzRCxJQUFJLElBQUksQ0FBQyxJQUFJLEVBQUU7WUFDYixJQUFJLE9BQU8sQ0FBQyxVQUFVLENBQUMsRUFBRTtnQkFDdkIsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLGVBQWUsRUFBRSxDQUFDLENBQUM7YUFDL0M7WUFDRCxJQUFJLE9BQU8sQ0FBQyxRQUFRLENBQUMsRUFBRTtnQkFDckIsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7Z0JBQ25DLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQzthQUNsQztTQUNGO2FBQU07WUFDTCxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7U0FDakI7UUFDRCxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQy9DLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsWUFBWSxDQUFDLENBQUM7UUFDckQsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxZQUFZLENBQUMsQ0FBQztRQUN2RCxJQUFJLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLGVBQWUsQ0FBQyxDQUFDO1FBQzdELElBQUksQ0FBQyxjQUFjLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsZUFBZSxDQUFDLENBQUM7UUFDNUQsSUFBSSxDQUFDLGNBQWMsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxlQUFlLENBQUMsQ0FBQztRQUM1RCxJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLHFCQUFxQixDQUFDLENBQUM7UUFDakUsSUFBSSxDQUFDLGdCQUFnQixHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLGtCQUFrQixDQUFDLENBQUM7SUFDbkUsQ0FBQztJQUVELDhDQUFhLEdBQWIsVUFBYyxHQUFRO1FBQ3BCLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsWUFBWSxDQUFDLEtBQUssT0FBTyxFQUFFO1lBQ2xELElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxHQUFHLENBQUMsQ0FBQztTQUMvQjthQUFNO1lBQ0wsSUFBSSxDQUFDLFdBQVcsQ0FBQyxHQUFHLENBQUMsQ0FBQztTQUN2QjtJQUNILENBQUM7SUFFRCxnREFBZSxHQUFmLFVBQWdCLEdBQVE7UUFDdEIsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxZQUFZLENBQUMsS0FBSyxPQUFPLEVBQUU7WUFDbEQsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDekIsSUFBSSxDQUFDLGlCQUFpQixDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBQzVCLElBQUksQ0FBQyxhQUFhLENBQUMsR0FBRyxDQUFDLENBQUM7U0FDekI7SUFDSCxDQUFDO0lBRUQsMkNBQVUsR0FBVixVQUFXLEdBQVE7UUFDakIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDMUIsQ0FBQztJQUVELGtEQUFpQixHQUFqQixVQUFrQixHQUFRO1FBQ3hCLElBQUksQ0FBQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDakMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQzVCLElBQUksQ0FBQyxhQUFhLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDMUIsQ0FBQztJQUVELGdEQUFlLEdBQWYsVUFBZ0IsTUFBVztRQUN6QixJQUFJLENBQUMsYUFBYSxHQUFHLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQztRQUN6QyxJQUFJLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUM7UUFFNUMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxDQUFDO1FBQzdCLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDM0IsQ0FBQztJQUVELDRDQUFXLEdBQVgsVUFBWSxHQUFRO1FBQ2xCLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ3pCLElBQUksQ0FBQyxhQUFhLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDMUIsQ0FBQztJQUVELG9EQUFtQixHQUFuQixVQUFvQixHQUFRO1FBQzFCLElBQUksQ0FBQyxhQUFhLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDMUIsQ0FBQztJQUVELHlDQUFRLEdBQVI7UUFBQSxpQkFJQztRQUhDLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO1FBQ25DLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsZUFBZSxFQUFFLENBQUMsQ0FBQztRQUMxRCxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDLFNBQVMsQ0FBQyxVQUFDLEdBQUcsSUFBSyxPQUFBLEtBQUksQ0FBQyxhQUFhLENBQUMsR0FBRyxDQUFDLEVBQXZCLENBQXVCLENBQUMsQ0FBQztJQUN0RSxDQUFDO0lBRUQsOENBQWEsR0FBYjtRQUNFLElBQUksSUFBSSxDQUFDLE1BQU0sWUFBWSxVQUFVLEVBQUU7WUFDckMsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDO1NBQ3BCO2FBQU0sSUFBSSxJQUFJLENBQUMsTUFBTSxZQUFZLEtBQUssRUFBRTtZQUN2QyxPQUFPLElBQUksZUFBZSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztTQUN6QztRQUVELE9BQU8sSUFBSSxlQUFlLEVBQUUsQ0FBQztJQUMvQixDQUFDO0lBRUQsZ0RBQWUsR0FBZjtRQUNFLE9BQU8sVUFBVSxDQUFDLEVBQUUsRUFBRSxJQUFJLENBQUMsZUFBZSxFQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUM3RCxDQUFDO0lBRUQsMkNBQVUsR0FBVixVQUFXLE1BQVc7UUFDcEIsSUFBSSxDQUFDLGdCQUFnQixFQUFFLENBQUM7SUFDMUIsQ0FBQztJQUVELHFDQUFJLEdBQUosVUFBSyxNQUFXO1FBQ2QsSUFBSSxDQUFDLGdCQUFnQixFQUFFLENBQUM7SUFDMUIsQ0FBQztJQUVELHVDQUFNLEdBQU4sVUFBTyxNQUFXO1FBQ2hCLElBQUksQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO0lBQzFCLENBQUM7SUFFTyxpREFBZ0IsR0FBeEI7UUFDRSxJQUFJLENBQUMsYUFBYSxHQUFHLEtBQUssQ0FBQztJQUM3QixDQUFDO0lBRU8sa0RBQWlCLEdBQXpCLFVBQTBCLEdBQVE7UUFDaEMsSUFBTSxZQUFZLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxlQUFlLEVBQUUsQ0FBQztRQUVqRCxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQztZQUN0QixJQUFJLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsT0FBTyxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUk7WUFDaEMsVUFBVSxFQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLGFBQWEsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJO1lBQzVDLE1BQU0sRUFBRSxJQUFJLENBQUMsTUFBTTtZQUNuQixRQUFRLEVBQUUsWUFBWSxJQUFJLFlBQVksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLFlBQVksQ0FBQyxHQUFHLENBQUMsVUFBQyxDQUFNLElBQUssT0FBQSxDQUFDLENBQUMsT0FBTyxFQUFFLEVBQVgsQ0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUU7U0FDL0YsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVPLDhDQUFhLEdBQXJCLFVBQXNCLEdBQVE7UUFDNUIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUM7WUFDbEIsSUFBSSxFQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLE9BQU8sRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJO1lBQ2hDLFVBQVUsRUFBRSxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxhQUFhLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSTtZQUM1QyxNQUFNLEVBQUUsSUFBSSxDQUFDLE1BQU07U0FDcEIsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQS9MUTtRQUFSLEtBQUssRUFBRTs7MERBQWE7SUFDWjtRQUFSLEtBQUssRUFBRTswQ0FBVyxNQUFNOzREQUFNO0lBRXJCO1FBQVQsTUFBTSxFQUFFOzs2REFBcUM7SUFDcEM7UUFBVCxNQUFNLEVBQUU7O2lFQUF5QztJQUN4QztRQUFULE1BQU0sRUFBRTs7MERBQWtDO0lBQ2pDO1FBQVQsTUFBTSxFQUFFOzt3REFBZ0M7SUFDL0I7UUFBVCxNQUFNLEVBQUU7OzBEQUFrQztJQUNqQztRQUFULE1BQU0sRUFBRTs7MERBQWtDO0lBQ2pDO1FBQVQsTUFBTSxFQUFFOztpRUFBeUM7SUFDeEM7UUFBVCxNQUFNLEVBQUU7OytEQUF1QztJQUN0QztRQUFULE1BQU0sRUFBRTs7aUVBQXlDO0lBQ3hDO1FBQVQsTUFBTSxFQUFFOzBDQUFXLFlBQVk7NERBQWdDO0lBZHJELHNCQUFzQjtRQUxsQyxTQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsaUJBQWlCO1lBRTNCLDZpREFBK0M7O1NBQ2hELENBQUM7T0FDVyxzQkFBc0IsQ0FtTWxDO0lBQUQsNkJBQUM7Q0FBQSxBQW5NRCxJQW1NQztTQW5NWSxzQkFBc0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBPdXRwdXQsIFNpbXBsZUNoYW5nZSwgRXZlbnRFbWl0dGVyLCBPbkNoYW5nZXMgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbmltcG9ydCB7IEdyaWQgfSBmcm9tICcuL2xpYi9ncmlkJztcclxuaW1wb3J0IHsgRGF0YVNvdXJjZSB9IGZyb20gJy4vbGliL2RhdGEtc291cmNlL2RhdGEtc291cmNlJztcclxuaW1wb3J0IHsgUm93IH0gZnJvbSAnLi9saWIvZGF0YS1zZXQvcm93JztcclxuaW1wb3J0IHsgZGVlcEV4dGVuZCB9IGZyb20gJy4vbGliL2hlbHBlcnMnO1xyXG5pbXBvcnQgeyBMb2NhbERhdGFTb3VyY2UgfSBmcm9tICcuL2xpYi9kYXRhLXNvdXJjZS9sb2NhbC9sb2NhbC5kYXRhLXNvdXJjZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ25nMi1zbWFydC10YWJsZScsXHJcbiAgc3R5bGVVcmxzOiBbJy4vbmcyLXNtYXJ0LXRhYmxlLmNvbXBvbmVudC5zY3NzJ10sXHJcbiAgdGVtcGxhdGVVcmw6ICcuL25nMi1zbWFydC10YWJsZS5jb21wb25lbnQuaHRtbCcsXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBOZzJTbWFydFRhYmxlQ29tcG9uZW50IGltcGxlbWVudHMgT25DaGFuZ2VzIHtcclxuXHJcbiAgQElucHV0KCkgc291cmNlOiBhbnk7XHJcbiAgQElucHV0KCkgc2V0dGluZ3M6IE9iamVjdCA9IHt9O1xyXG5cclxuICBAT3V0cHV0KCkgcm93U2VsZWN0ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XHJcbiAgQE91dHB1dCgpIHVzZXJSb3dTZWxlY3QgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcclxuICBAT3V0cHV0KCkgZGVsZXRlID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XHJcbiAgQE91dHB1dCgpIGVkaXQgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcclxuICBAT3V0cHV0KCkgY3JlYXRlID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XHJcbiAgQE91dHB1dCgpIGN1c3RvbSA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xyXG4gIEBPdXRwdXQoKSBkZWxldGVDb25maXJtID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XHJcbiAgQE91dHB1dCgpIGVkaXRDb25maXJtID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XHJcbiAgQE91dHB1dCgpIGNyZWF0ZUNvbmZpcm0gPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcclxuICBAT3V0cHV0KCkgcm93SG92ZXI6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XHJcblxyXG4gIHRhYmxlQ2xhc3M6IHN0cmluZztcclxuICB0YWJsZUlkOiBzdHJpbmc7XHJcbiAgcGVyUGFnZVNlbGVjdDogYW55O1xyXG4gIGlzSGlkZUhlYWRlcjogYm9vbGVhbjtcclxuICBpc0hpZGVTdWJIZWFkZXI6IGJvb2xlYW47XHJcbiAgaXNQYWdlckRpc3BsYXk6IGJvb2xlYW47XHJcbiAgcm93Q2xhc3NGdW5jdGlvbjogRnVuY3Rpb247XHJcblxyXG5cclxuICBncmlkOiBHcmlkO1xyXG4gIGRlZmF1bHRTZXR0aW5nczogT2JqZWN0ID0ge1xyXG4gICAgbW9kZTogJ2lubGluZScsIC8vIGlubGluZXxleHRlcm5hbHxjbGljay10by1lZGl0XHJcbiAgICBzZWxlY3RNb2RlOiAnc2luZ2xlJywgLy8gc2luZ2xlfG11bHRpXHJcbiAgICBoaWRlSGVhZGVyOiBmYWxzZSxcclxuICAgIGhpZGVTdWJIZWFkZXI6IGZhbHNlLFxyXG4gICAgYWN0aW9uczoge1xyXG4gICAgICBjb2x1bW5UaXRsZTogJ0FjdGlvbnMnLFxyXG4gICAgICBhZGQ6IHRydWUsXHJcbiAgICAgIGVkaXQ6IHRydWUsXHJcbiAgICAgIGRlbGV0ZTogdHJ1ZSxcclxuICAgICAgY3VzdG9tOiBbXSxcclxuICAgICAgcG9zaXRpb246ICdsZWZ0JywgLy8gbGVmdHxyaWdodFxyXG4gICAgfSxcclxuICAgIGZpbHRlcjoge1xyXG4gICAgICBpbnB1dENsYXNzOiAnJyxcclxuICAgIH0sXHJcbiAgICBlZGl0OiB7XHJcbiAgICAgIGlucHV0Q2xhc3M6ICcnLFxyXG4gICAgICBlZGl0QnV0dG9uQ29udGVudDogJ0VkaXQnLFxyXG4gICAgICBzYXZlQnV0dG9uQ29udGVudDogJ1VwZGF0ZScsXHJcbiAgICAgIGNhbmNlbEJ1dHRvbkNvbnRlbnQ6ICdDYW5jZWwnLFxyXG4gICAgICBjb25maXJtU2F2ZTogZmFsc2UsXHJcbiAgICB9LFxyXG4gICAgYWRkOiB7XHJcbiAgICAgIGlucHV0Q2xhc3M6ICcnLFxyXG4gICAgICBhZGRCdXR0b25Db250ZW50OiAnQWRkIE5ldycsXHJcbiAgICAgIGNyZWF0ZUJ1dHRvbkNvbnRlbnQ6ICdDcmVhdGUnLFxyXG4gICAgICBjYW5jZWxCdXR0b25Db250ZW50OiAnQ2FuY2VsJyxcclxuICAgICAgY29uZmlybUNyZWF0ZTogZmFsc2UsXHJcbiAgICB9LFxyXG4gICAgZGVsZXRlOiB7XHJcbiAgICAgIGRlbGV0ZUJ1dHRvbkNvbnRlbnQ6ICdEZWxldGUnLFxyXG4gICAgICBjb25maXJtRGVsZXRlOiBmYWxzZSxcclxuICAgIH0sXHJcbiAgICBhdHRyOiB7XHJcbiAgICAgIGlkOiAnJyxcclxuICAgICAgY2xhc3M6ICcnLFxyXG4gICAgfSxcclxuICAgIG5vRGF0YU1lc3NhZ2U6ICdObyBkYXRhIGZvdW5kJyxcclxuICAgIGNvbHVtbnM6IHt9LFxyXG4gICAgcGFnZXI6IHtcclxuICAgICAgZGlzcGxheTogdHJ1ZSxcclxuICAgICAgcGVyUGFnZTogMTAsXHJcbiAgICB9LFxyXG4gICAgcm93Q2xhc3NGdW5jdGlvbjogKCkgPT4gXCJcIlxyXG4gIH07XHJcblxyXG4gIGlzQWxsU2VsZWN0ZWQ6IGJvb2xlYW4gPSBmYWxzZTtcclxuXHJcbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogeyBbcHJvcGVydHlOYW1lOiBzdHJpbmddOiBTaW1wbGVDaGFuZ2UgfSkge1xyXG4gICAgaWYgKHRoaXMuZ3JpZCkge1xyXG4gICAgICBpZiAoY2hhbmdlc1snc2V0dGluZ3MnXSkge1xyXG4gICAgICAgIHRoaXMuZ3JpZC5zZXRTZXR0aW5ncyh0aGlzLnByZXBhcmVTZXR0aW5ncygpKTtcclxuICAgICAgfVxyXG4gICAgICBpZiAoY2hhbmdlc1snc291cmNlJ10pIHtcclxuICAgICAgICB0aGlzLnNvdXJjZSA9IHRoaXMucHJlcGFyZVNvdXJjZSgpO1xyXG4gICAgICAgIHRoaXMuZ3JpZC5zZXRTb3VyY2UodGhpcy5zb3VyY2UpO1xyXG4gICAgICB9XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLmluaXRHcmlkKCk7XHJcbiAgICB9XHJcbiAgICB0aGlzLnRhYmxlSWQgPSB0aGlzLmdyaWQuZ2V0U2V0dGluZygnYXR0ci5pZCcpO1xyXG4gICAgdGhpcy50YWJsZUNsYXNzID0gdGhpcy5ncmlkLmdldFNldHRpbmcoJ2F0dHIuY2xhc3MnKTtcclxuICAgIHRoaXMuaXNIaWRlSGVhZGVyID0gdGhpcy5ncmlkLmdldFNldHRpbmcoJ2hpZGVIZWFkZXInKTtcclxuICAgIHRoaXMuaXNIaWRlU3ViSGVhZGVyID0gdGhpcy5ncmlkLmdldFNldHRpbmcoJ2hpZGVTdWJIZWFkZXInKTtcclxuICAgIHRoaXMuaXNQYWdlckRpc3BsYXkgPSB0aGlzLmdyaWQuZ2V0U2V0dGluZygncGFnZXIuZGlzcGxheScpO1xyXG4gICAgdGhpcy5pc1BhZ2VyRGlzcGxheSA9IHRoaXMuZ3JpZC5nZXRTZXR0aW5nKCdwYWdlci5kaXNwbGF5Jyk7XHJcbiAgICB0aGlzLnBlclBhZ2VTZWxlY3QgPSB0aGlzLmdyaWQuZ2V0U2V0dGluZygncGFnZXIucGVyUGFnZVNlbGVjdCcpO1xyXG4gICAgdGhpcy5yb3dDbGFzc0Z1bmN0aW9uID0gdGhpcy5ncmlkLmdldFNldHRpbmcoJ3Jvd0NsYXNzRnVuY3Rpb24nKTtcclxuICB9XHJcblxyXG4gIGVkaXRSb3dTZWxlY3Qocm93OiBSb3cpIHtcclxuICAgIGlmICh0aGlzLmdyaWQuZ2V0U2V0dGluZygnc2VsZWN0TW9kZScpID09PSAnbXVsdGknKSB7XHJcbiAgICAgIHRoaXMub25NdWx0aXBsZVNlbGVjdFJvdyhyb3cpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5vblNlbGVjdFJvdyhyb3cpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgb25Vc2VyU2VsZWN0Um93KHJvdzogUm93KSB7XHJcbiAgICBpZiAodGhpcy5ncmlkLmdldFNldHRpbmcoJ3NlbGVjdE1vZGUnKSAhPT0gJ211bHRpJykge1xyXG4gICAgICB0aGlzLmdyaWQuc2VsZWN0Um93KHJvdyk7XHJcbiAgICAgIHRoaXMuZW1pdFVzZXJTZWxlY3RSb3cocm93KTtcclxuICAgICAgdGhpcy5lbWl0U2VsZWN0Um93KHJvdyk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBvblJvd0hvdmVyKHJvdzogUm93KSB7XHJcbiAgICB0aGlzLnJvd0hvdmVyLmVtaXQocm93KTtcclxuICB9XHJcblxyXG4gIG11bHRpcGxlU2VsZWN0Um93KHJvdzogUm93KSB7XHJcbiAgICB0aGlzLmdyaWQubXVsdGlwbGVTZWxlY3RSb3cocm93KTtcclxuICAgIHRoaXMuZW1pdFVzZXJTZWxlY3RSb3cocm93KTtcclxuICAgIHRoaXMuZW1pdFNlbGVjdFJvdyhyb3cpO1xyXG4gIH1cclxuXHJcbiAgb25TZWxlY3RBbGxSb3dzKCRldmVudDogYW55KSB7XHJcbiAgICB0aGlzLmlzQWxsU2VsZWN0ZWQgPSAhdGhpcy5pc0FsbFNlbGVjdGVkO1xyXG4gICAgdGhpcy5ncmlkLnNlbGVjdEFsbFJvd3ModGhpcy5pc0FsbFNlbGVjdGVkKTtcclxuXHJcbiAgICB0aGlzLmVtaXRVc2VyU2VsZWN0Um93KG51bGwpO1xyXG4gICAgdGhpcy5lbWl0U2VsZWN0Um93KG51bGwpO1xyXG4gIH1cclxuXHJcbiAgb25TZWxlY3RSb3cocm93OiBSb3cpIHtcclxuICAgIHRoaXMuZ3JpZC5zZWxlY3RSb3cocm93KTtcclxuICAgIHRoaXMuZW1pdFNlbGVjdFJvdyhyb3cpO1xyXG4gIH1cclxuXHJcbiAgb25NdWx0aXBsZVNlbGVjdFJvdyhyb3c6IFJvdykge1xyXG4gICAgdGhpcy5lbWl0U2VsZWN0Um93KHJvdyk7XHJcbiAgfVxyXG5cclxuICBpbml0R3JpZCgpIHtcclxuICAgIHRoaXMuc291cmNlID0gdGhpcy5wcmVwYXJlU291cmNlKCk7XHJcbiAgICB0aGlzLmdyaWQgPSBuZXcgR3JpZCh0aGlzLnNvdXJjZSwgdGhpcy5wcmVwYXJlU2V0dGluZ3MoKSk7XHJcbiAgICB0aGlzLmdyaWQub25TZWxlY3RSb3coKS5zdWJzY3JpYmUoKHJvdykgPT4gdGhpcy5lbWl0U2VsZWN0Um93KHJvdykpO1xyXG4gIH1cclxuXHJcbiAgcHJlcGFyZVNvdXJjZSgpOiBEYXRhU291cmNlIHtcclxuICAgIGlmICh0aGlzLnNvdXJjZSBpbnN0YW5jZW9mIERhdGFTb3VyY2UpIHtcclxuICAgICAgcmV0dXJuIHRoaXMuc291cmNlO1xyXG4gICAgfSBlbHNlIGlmICh0aGlzLnNvdXJjZSBpbnN0YW5jZW9mIEFycmF5KSB7XHJcbiAgICAgIHJldHVybiBuZXcgTG9jYWxEYXRhU291cmNlKHRoaXMuc291cmNlKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gbmV3IExvY2FsRGF0YVNvdXJjZSgpO1xyXG4gIH1cclxuXHJcbiAgcHJlcGFyZVNldHRpbmdzKCk6IE9iamVjdCB7XHJcbiAgICByZXR1cm4gZGVlcEV4dGVuZCh7fSwgdGhpcy5kZWZhdWx0U2V0dGluZ3MsIHRoaXMuc2V0dGluZ3MpO1xyXG4gIH1cclxuXHJcbiAgY2hhbmdlUGFnZSgkZXZlbnQ6IGFueSkge1xyXG4gICAgdGhpcy5yZXNldEFsbFNlbGVjdG9yKCk7XHJcbiAgfVxyXG5cclxuICBzb3J0KCRldmVudDogYW55KSB7XHJcbiAgICB0aGlzLnJlc2V0QWxsU2VsZWN0b3IoKTtcclxuICB9XHJcblxyXG4gIGZpbHRlcigkZXZlbnQ6IGFueSkge1xyXG4gICAgdGhpcy5yZXNldEFsbFNlbGVjdG9yKCk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHJlc2V0QWxsU2VsZWN0b3IoKSB7XHJcbiAgICB0aGlzLmlzQWxsU2VsZWN0ZWQgPSBmYWxzZTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgZW1pdFVzZXJTZWxlY3RSb3cocm93OiBSb3cpIHtcclxuICAgIGNvbnN0IHNlbGVjdGVkUm93cyA9IHRoaXMuZ3JpZC5nZXRTZWxlY3RlZFJvd3MoKTtcclxuXHJcbiAgICB0aGlzLnVzZXJSb3dTZWxlY3QuZW1pdCh7XHJcbiAgICAgIGRhdGE6IHJvdyA/IHJvdy5nZXREYXRhKCkgOiBudWxsLFxyXG4gICAgICBpc1NlbGVjdGVkOiByb3cgPyByb3cuZ2V0SXNTZWxlY3RlZCgpIDogbnVsbCxcclxuICAgICAgc291cmNlOiB0aGlzLnNvdXJjZSxcclxuICAgICAgc2VsZWN0ZWQ6IHNlbGVjdGVkUm93cyAmJiBzZWxlY3RlZFJvd3MubGVuZ3RoID8gc2VsZWN0ZWRSb3dzLm1hcCgocjogUm93KSA9PiByLmdldERhdGEoKSkgOiBbXSxcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBlbWl0U2VsZWN0Um93KHJvdzogUm93KSB7XHJcbiAgICB0aGlzLnJvd1NlbGVjdC5lbWl0KHtcclxuICAgICAgZGF0YTogcm93ID8gcm93LmdldERhdGEoKSA6IG51bGwsXHJcbiAgICAgIGlzU2VsZWN0ZWQ6IHJvdyA/IHJvdy5nZXRJc1NlbGVjdGVkKCkgOiBudWxsLFxyXG4gICAgICBzb3VyY2U6IHRoaXMuc291cmNlLFxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxufVxyXG4iXX0=