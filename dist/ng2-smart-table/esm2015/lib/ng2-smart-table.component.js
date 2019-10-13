import * as tslib_1 from "tslib";
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Grid } from './lib/grid';
import { DataSource } from './lib/data-source/data-source';
import { deepExtend } from './lib/helpers';
import { LocalDataSource } from './lib/data-source/local/local.data-source';
let Ng2SmartTableComponent = class Ng2SmartTableComponent {
    constructor() {
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
            rowClassFunction: () => ""
        };
        this.isAllSelected = false;
    }
    ngOnChanges(changes) {
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
    }
    editRowSelect(row) {
        if (this.grid.getSetting('selectMode') === 'multi') {
            this.onMultipleSelectRow(row);
        }
        else {
            this.onSelectRow(row);
        }
    }
    onUserSelectRow(row) {
        if (this.grid.getSetting('selectMode') !== 'multi') {
            this.grid.selectRow(row);
            this.emitUserSelectRow(row);
            this.emitSelectRow(row);
        }
    }
    onRowHover(row) {
        this.rowHover.emit(row);
    }
    multipleSelectRow(row) {
        this.grid.multipleSelectRow(row);
        this.emitUserSelectRow(row);
        this.emitSelectRow(row);
    }
    onSelectAllRows($event) {
        this.isAllSelected = !this.isAllSelected;
        this.grid.selectAllRows(this.isAllSelected);
        this.emitUserSelectRow(null);
        this.emitSelectRow(null);
    }
    onSelectRow(row) {
        this.grid.selectRow(row);
        this.emitSelectRow(row);
    }
    onMultipleSelectRow(row) {
        this.emitSelectRow(row);
    }
    initGrid() {
        this.source = this.prepareSource();
        this.grid = new Grid(this.source, this.prepareSettings());
        this.grid.onSelectRow().subscribe((row) => this.emitSelectRow(row));
    }
    prepareSource() {
        if (this.source instanceof DataSource) {
            return this.source;
        }
        else if (this.source instanceof Array) {
            return new LocalDataSource(this.source);
        }
        return new LocalDataSource();
    }
    prepareSettings() {
        return deepExtend({}, this.defaultSettings, this.settings);
    }
    changePage($event) {
        this.resetAllSelector();
    }
    sort($event) {
        this.resetAllSelector();
    }
    filter($event) {
        this.resetAllSelector();
    }
    resetAllSelector() {
        this.isAllSelected = false;
    }
    emitUserSelectRow(row) {
        const selectedRows = this.grid.getSelectedRows();
        this.userRowSelect.emit({
            data: row ? row.getData() : null,
            isSelected: row ? row.getIsSelected() : null,
            source: this.source,
            selected: selectedRows && selectedRows.length ? selectedRows.map((r) => r.getData()) : [],
        });
    }
    emitSelectRow(row) {
        this.rowSelect.emit({
            data: row ? row.getData() : null,
            isSelected: row ? row.getIsSelected() : null,
            source: this.source,
        });
    }
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
export { Ng2SmartTableComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmcyLXNtYXJ0LXRhYmxlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nMi1zbWFydC10YWJsZS8iLCJzb3VyY2VzIjpbImxpYi9uZzItc21hcnQtdGFibGUuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQWdCLFlBQVksRUFBYSxNQUFNLGVBQWUsQ0FBQztBQUVoRyxPQUFPLEVBQUUsSUFBSSxFQUFFLE1BQU0sWUFBWSxDQUFDO0FBQ2xDLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQztBQUUzRCxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSwyQ0FBMkMsQ0FBQztBQU81RSxJQUFhLHNCQUFzQixHQUFuQyxNQUFhLHNCQUFzQjtJQUxuQztRQVFXLGFBQVEsR0FBVyxFQUFFLENBQUM7UUFFckIsY0FBUyxHQUFHLElBQUksWUFBWSxFQUFPLENBQUM7UUFDcEMsa0JBQWEsR0FBRyxJQUFJLFlBQVksRUFBTyxDQUFDO1FBQ3hDLFdBQU0sR0FBRyxJQUFJLFlBQVksRUFBTyxDQUFDO1FBQ2pDLFNBQUksR0FBRyxJQUFJLFlBQVksRUFBTyxDQUFDO1FBQy9CLFdBQU0sR0FBRyxJQUFJLFlBQVksRUFBTyxDQUFDO1FBQ2pDLFdBQU0sR0FBRyxJQUFJLFlBQVksRUFBTyxDQUFDO1FBQ2pDLGtCQUFhLEdBQUcsSUFBSSxZQUFZLEVBQU8sQ0FBQztRQUN4QyxnQkFBVyxHQUFHLElBQUksWUFBWSxFQUFPLENBQUM7UUFDdEMsa0JBQWEsR0FBRyxJQUFJLFlBQVksRUFBTyxDQUFDO1FBQ3hDLGFBQVEsR0FBc0IsSUFBSSxZQUFZLEVBQU8sQ0FBQztRQVloRSxvQkFBZSxHQUFXO1lBQ3hCLElBQUksRUFBRSxRQUFRO1lBQ2QsVUFBVSxFQUFFLFFBQVE7WUFDcEIsVUFBVSxF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QUU7c0NBQVcsTUFBTTt3REFBTTtBQUVyQjtJQUFULE1BQU0sRUFBRTs7eURBQXFDO0FBQ3BDO0lBQVQsTUFBTSxFQUFFOzs2REFBeUM7QUFDeEM7SUFBVCxNQUFNLEVBQUU7O3NEQUFrQztBQUNqQztJQUFULE1BQU0sRUFBRTs7b0RBQWdDO0FBQy9CO0lBQVQsTUFBTSxFQUFFOztzREFBa0M7QUFDakM7SUFBVCxNQUFNLEVBQUU7O3NEQUFrQztBQUNqQztJQUFULE1BQU0sRUFBRTs7NkRBQXlDO0FBQ3hDO0lBQVQsTUFBTSxFQUFFOzsyREFBdUM7QUFDdEM7SUFBVCxNQUFNLEVBQUU7OzZEQUF5QztBQUN4QztJQUFULE1BQU0sRUFBRTtzQ0FBVyxZQUFZO3dEQUFnQztBQWRyRCxzQkFBc0I7SUFMbEMsU0FBUyxDQUFDO1FBQ1QsUUFBUSxFQUFFLGlCQUFpQjtRQUUzQiw2aURBQStDOztLQUNoRCxDQUFDO0dBQ1csc0JBQXNCLENBbU1sQztTQW5NWSxzQkFBc0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBPdXRwdXQsIFNpbXBsZUNoYW5nZSwgRXZlbnRFbWl0dGVyLCBPbkNoYW5nZXMgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbmltcG9ydCB7IEdyaWQgfSBmcm9tICcuL2xpYi9ncmlkJztcclxuaW1wb3J0IHsgRGF0YVNvdXJjZSB9IGZyb20gJy4vbGliL2RhdGEtc291cmNlL2RhdGEtc291cmNlJztcclxuaW1wb3J0IHsgUm93IH0gZnJvbSAnLi9saWIvZGF0YS1zZXQvcm93JztcclxuaW1wb3J0IHsgZGVlcEV4dGVuZCB9IGZyb20gJy4vbGliL2hlbHBlcnMnO1xyXG5pbXBvcnQgeyBMb2NhbERhdGFTb3VyY2UgfSBmcm9tICcuL2xpYi9kYXRhLXNvdXJjZS9sb2NhbC9sb2NhbC5kYXRhLXNvdXJjZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ25nMi1zbWFydC10YWJsZScsXHJcbiAgc3R5bGVVcmxzOiBbJy4vbmcyLXNtYXJ0LXRhYmxlLmNvbXBvbmVudC5zY3NzJ10sXHJcbiAgdGVtcGxhdGVVcmw6ICcuL25nMi1zbWFydC10YWJsZS5jb21wb25lbnQuaHRtbCcsXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBOZzJTbWFydFRhYmxlQ29tcG9uZW50IGltcGxlbWVudHMgT25DaGFuZ2VzIHtcclxuXHJcbiAgQElucHV0KCkgc291cmNlOiBhbnk7XHJcbiAgQElucHV0KCkgc2V0dGluZ3M6IE9iamVjdCA9IHt9O1xyXG5cclxuICBAT3V0cHV0KCkgcm93U2VsZWN0ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XHJcbiAgQE91dHB1dCgpIHVzZXJSb3dTZWxlY3QgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcclxuICBAT3V0cHV0KCkgZGVsZXRlID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XHJcbiAgQE91dHB1dCgpIGVkaXQgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcclxuICBAT3V0cHV0KCkgY3JlYXRlID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XHJcbiAgQE91dHB1dCgpIGN1c3RvbSA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xyXG4gIEBPdXRwdXQoKSBkZWxldGVDb25maXJtID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XHJcbiAgQE91dHB1dCgpIGVkaXRDb25maXJtID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XHJcbiAgQE91dHB1dCgpIGNyZWF0ZUNvbmZpcm0gPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcclxuICBAT3V0cHV0KCkgcm93SG92ZXI6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XHJcblxyXG4gIHRhYmxlQ2xhc3M6IHN0cmluZztcclxuICB0YWJsZUlkOiBzdHJpbmc7XHJcbiAgcGVyUGFnZVNlbGVjdDogYW55O1xyXG4gIGlzSGlkZUhlYWRlcjogYm9vbGVhbjtcclxuICBpc0hpZGVTdWJIZWFkZXI6IGJvb2xlYW47XHJcbiAgaXNQYWdlckRpc3BsYXk6IGJvb2xlYW47XHJcbiAgcm93Q2xhc3NGdW5jdGlvbjogRnVuY3Rpb247XHJcblxyXG5cclxuICBncmlkOiBHcmlkO1xyXG4gIGRlZmF1bHRTZXR0aW5nczogT2JqZWN0ID0ge1xyXG4gICAgbW9kZTogJ2lubGluZScsIC8vIGlubGluZXxleHRlcm5hbHxjbGljay10by1lZGl0XHJcbiAgICBzZWxlY3RNb2RlOiAnc2luZ2xlJywgLy8gc2luZ2xlfG11bHRpXHJcbiAgICBoaWRlSGVhZGVyOiBmYWxzZSxcclxuICAgIGhpZGVTdWJIZWFkZXI6IGZhbHNlLFxyXG4gICAgYWN0aW9uczoge1xyXG4gICAgICBjb2x1bW5UaXRsZTogJ0FjdGlvbnMnLFxyXG4gICAgICBhZGQ6IHRydWUsXHJcbiAgICAgIGVkaXQ6IHRydWUsXHJcbiAgICAgIGRlbGV0ZTogdHJ1ZSxcclxuICAgICAgY3VzdG9tOiBbXSxcclxuICAgICAgcG9zaXRpb246ICdsZWZ0JywgLy8gbGVmdHxyaWdodFxyXG4gICAgfSxcclxuICAgIGZpbHRlcjoge1xyXG4gICAgICBpbnB1dENsYXNzOiAnJyxcclxuICAgIH0sXHJcbiAgICBlZGl0OiB7XHJcbiAgICAgIGlucHV0Q2xhc3M6ICcnLFxyXG4gICAgICBlZGl0QnV0dG9uQ29udGVudDogJ0VkaXQnLFxyXG4gICAgICBzYXZlQnV0dG9uQ29udGVudDogJ1VwZGF0ZScsXHJcbiAgICAgIGNhbmNlbEJ1dHRvbkNvbnRlbnQ6ICdDYW5jZWwnLFxyXG4gICAgICBjb25maXJtU2F2ZTogZmFsc2UsXHJcbiAgICB9LFxyXG4gICAgYWRkOiB7XHJcbiAgICAgIGlucHV0Q2xhc3M6ICcnLFxyXG4gICAgICBhZGRCdXR0b25Db250ZW50OiAnQWRkIE5ldycsXHJcbiAgICAgIGNyZWF0ZUJ1dHRvbkNvbnRlbnQ6ICdDcmVhdGUnLFxyXG4gICAgICBjYW5jZWxCdXR0b25Db250ZW50OiAnQ2FuY2VsJyxcclxuICAgICAgY29uZmlybUNyZWF0ZTogZmFsc2UsXHJcbiAgICB9LFxyXG4gICAgZGVsZXRlOiB7XHJcbiAgICAgIGRlbGV0ZUJ1dHRvbkNvbnRlbnQ6ICdEZWxldGUnLFxyXG4gICAgICBjb25maXJtRGVsZXRlOiBmYWxzZSxcclxuICAgIH0sXHJcbiAgICBhdHRyOiB7XHJcbiAgICAgIGlkOiAnJyxcclxuICAgICAgY2xhc3M6ICcnLFxyXG4gICAgfSxcclxuICAgIG5vRGF0YU1lc3NhZ2U6ICdObyBkYXRhIGZvdW5kJyxcclxuICAgIGNvbHVtbnM6IHt9LFxyXG4gICAgcGFnZXI6IHtcclxuICAgICAgZGlzcGxheTogdHJ1ZSxcclxuICAgICAgcGVyUGFnZTogMTAsXHJcbiAgICB9LFxyXG4gICAgcm93Q2xhc3NGdW5jdGlvbjogKCkgPT4gXCJcIlxyXG4gIH07XHJcblxyXG4gIGlzQWxsU2VsZWN0ZWQ6IGJvb2xlYW4gPSBmYWxzZTtcclxuXHJcbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogeyBbcHJvcGVydHlOYW1lOiBzdHJpbmddOiBTaW1wbGVDaGFuZ2UgfSkge1xyXG4gICAgaWYgKHRoaXMuZ3JpZCkge1xyXG4gICAgICBpZiAoY2hhbmdlc1snc2V0dGluZ3MnXSkge1xyXG4gICAgICAgIHRoaXMuZ3JpZC5zZXRTZXR0aW5ncyh0aGlzLnByZXBhcmVTZXR0aW5ncygpKTtcclxuICAgICAgfVxyXG4gICAgICBpZiAoY2hhbmdlc1snc291cmNlJ10pIHtcclxuICAgICAgICB0aGlzLnNvdXJjZSA9IHRoaXMucHJlcGFyZVNvdXJjZSgpO1xyXG4gICAgICAgIHRoaXMuZ3JpZC5zZXRTb3VyY2UodGhpcy5zb3VyY2UpO1xyXG4gICAgICB9XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLmluaXRHcmlkKCk7XHJcbiAgICB9XHJcbiAgICB0aGlzLnRhYmxlSWQgPSB0aGlzLmdyaWQuZ2V0U2V0dGluZygnYXR0ci5pZCcpO1xyXG4gICAgdGhpcy50YWJsZUNsYXNzID0gdGhpcy5ncmlkLmdldFNldHRpbmcoJ2F0dHIuY2xhc3MnKTtcclxuICAgIHRoaXMuaXNIaWRlSGVhZGVyID0gdGhpcy5ncmlkLmdldFNldHRpbmcoJ2hpZGVIZWFkZXInKTtcclxuICAgIHRoaXMuaXNIaWRlU3ViSGVhZGVyID0gdGhpcy5ncmlkLmdldFNldHRpbmcoJ2hpZGVTdWJIZWFkZXInKTtcclxuICAgIHRoaXMuaXNQYWdlckRpc3BsYXkgPSB0aGlzLmdyaWQuZ2V0U2V0dGluZygncGFnZXIuZGlzcGxheScpO1xyXG4gICAgdGhpcy5pc1BhZ2VyRGlzcGxheSA9IHRoaXMuZ3JpZC5nZXRTZXR0aW5nKCdwYWdlci5kaXNwbGF5Jyk7XHJcbiAgICB0aGlzLnBlclBhZ2VTZWxlY3QgPSB0aGlzLmdyaWQuZ2V0U2V0dGluZygncGFnZXIucGVyUGFnZVNlbGVjdCcpO1xyXG4gICAgdGhpcy5yb3dDbGFzc0Z1bmN0aW9uID0gdGhpcy5ncmlkLmdldFNldHRpbmcoJ3Jvd0NsYXNzRnVuY3Rpb24nKTtcclxuICB9XHJcblxyXG4gIGVkaXRSb3dTZWxlY3Qocm93OiBSb3cpIHtcclxuICAgIGlmICh0aGlzLmdyaWQuZ2V0U2V0dGluZygnc2VsZWN0TW9kZScpID09PSAnbXVsdGknKSB7XHJcbiAgICAgIHRoaXMub25NdWx0aXBsZVNlbGVjdFJvdyhyb3cpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5vblNlbGVjdFJvdyhyb3cpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgb25Vc2VyU2VsZWN0Um93KHJvdzogUm93KSB7XHJcbiAgICBpZiAodGhpcy5ncmlkLmdldFNldHRpbmcoJ3NlbGVjdE1vZGUnKSAhPT0gJ211bHRpJykge1xyXG4gICAgICB0aGlzLmdyaWQuc2VsZWN0Um93KHJvdyk7XHJcbiAgICAgIHRoaXMuZW1pdFVzZXJTZWxlY3RSb3cocm93KTtcclxuICAgICAgdGhpcy5lbWl0U2VsZWN0Um93KHJvdyk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBvblJvd0hvdmVyKHJvdzogUm93KSB7XHJcbiAgICB0aGlzLnJvd0hvdmVyLmVtaXQocm93KTtcclxuICB9XHJcblxyXG4gIG11bHRpcGxlU2VsZWN0Um93KHJvdzogUm93KSB7XHJcbiAgICB0aGlzLmdyaWQubXVsdGlwbGVTZWxlY3RSb3cocm93KTtcclxuICAgIHRoaXMuZW1pdFVzZXJTZWxlY3RSb3cocm93KTtcclxuICAgIHRoaXMuZW1pdFNlbGVjdFJvdyhyb3cpO1xyXG4gIH1cclxuXHJcbiAgb25TZWxlY3RBbGxSb3dzKCRldmVudDogYW55KSB7XHJcbiAgICB0aGlzLmlzQWxsU2VsZWN0ZWQgPSAhdGhpcy5pc0FsbFNlbGVjdGVkO1xyXG4gICAgdGhpcy5ncmlkLnNlbGVjdEFsbFJvd3ModGhpcy5pc0FsbFNlbGVjdGVkKTtcclxuXHJcbiAgICB0aGlzLmVtaXRVc2VyU2VsZWN0Um93KG51bGwpO1xyXG4gICAgdGhpcy5lbWl0U2VsZWN0Um93KG51bGwpO1xyXG4gIH1cclxuXHJcbiAgb25TZWxlY3RSb3cocm93OiBSb3cpIHtcclxuICAgIHRoaXMuZ3JpZC5zZWxlY3RSb3cocm93KTtcclxuICAgIHRoaXMuZW1pdFNlbGVjdFJvdyhyb3cpO1xyXG4gIH1cclxuXHJcbiAgb25NdWx0aXBsZVNlbGVjdFJvdyhyb3c6IFJvdykge1xyXG4gICAgdGhpcy5lbWl0U2VsZWN0Um93KHJvdyk7XHJcbiAgfVxyXG5cclxuICBpbml0R3JpZCgpIHtcclxuICAgIHRoaXMuc291cmNlID0gdGhpcy5wcmVwYXJlU291cmNlKCk7XHJcbiAgICB0aGlzLmdyaWQgPSBuZXcgR3JpZCh0aGlzLnNvdXJjZSwgdGhpcy5wcmVwYXJlU2V0dGluZ3MoKSk7XHJcbiAgICB0aGlzLmdyaWQub25TZWxlY3RSb3coKS5zdWJzY3JpYmUoKHJvdykgPT4gdGhpcy5lbWl0U2VsZWN0Um93KHJvdykpO1xyXG4gIH1cclxuXHJcbiAgcHJlcGFyZVNvdXJjZSgpOiBEYXRhU291cmNlIHtcclxuICAgIGlmICh0aGlzLnNvdXJjZSBpbnN0YW5jZW9mIERhdGFTb3VyY2UpIHtcclxuICAgICAgcmV0dXJuIHRoaXMuc291cmNlO1xyXG4gICAgfSBlbHNlIGlmICh0aGlzLnNvdXJjZSBpbnN0YW5jZW9mIEFycmF5KSB7XHJcbiAgICAgIHJldHVybiBuZXcgTG9jYWxEYXRhU291cmNlKHRoaXMuc291cmNlKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gbmV3IExvY2FsRGF0YVNvdXJjZSgpO1xyXG4gIH1cclxuXHJcbiAgcHJlcGFyZVNldHRpbmdzKCk6IE9iamVjdCB7XHJcbiAgICByZXR1cm4gZGVlcEV4dGVuZCh7fSwgdGhpcy5kZWZhdWx0U2V0dGluZ3MsIHRoaXMuc2V0dGluZ3MpO1xyXG4gIH1cclxuXHJcbiAgY2hhbmdlUGFnZSgkZXZlbnQ6IGFueSkge1xyXG4gICAgdGhpcy5yZXNldEFsbFNlbGVjdG9yKCk7XHJcbiAgfVxyXG5cclxuICBzb3J0KCRldmVudDogYW55KSB7XHJcbiAgICB0aGlzLnJlc2V0QWxsU2VsZWN0b3IoKTtcclxuICB9XHJcblxyXG4gIGZpbHRlcigkZXZlbnQ6IGFueSkge1xyXG4gICAgdGhpcy5yZXNldEFsbFNlbGVjdG9yKCk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHJlc2V0QWxsU2VsZWN0b3IoKSB7XHJcbiAgICB0aGlzLmlzQWxsU2VsZWN0ZWQgPSBmYWxzZTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgZW1pdFVzZXJTZWxlY3RSb3cocm93OiBSb3cpIHtcclxuICAgIGNvbnN0IHNlbGVjdGVkUm93cyA9IHRoaXMuZ3JpZC5nZXRTZWxlY3RlZFJvd3MoKTtcclxuXHJcbiAgICB0aGlzLnVzZXJSb3dTZWxlY3QuZW1pdCh7XHJcbiAgICAgIGRhdGE6IHJvdyA/IHJvdy5nZXREYXRhKCkgOiBudWxsLFxyXG4gICAgICBpc1NlbGVjdGVkOiByb3cgPyByb3cuZ2V0SXNTZWxlY3RlZCgpIDogbnVsbCxcclxuICAgICAgc291cmNlOiB0aGlzLnNvdXJjZSxcclxuICAgICAgc2VsZWN0ZWQ6IHNlbGVjdGVkUm93cyAmJiBzZWxlY3RlZFJvd3MubGVuZ3RoID8gc2VsZWN0ZWRSb3dzLm1hcCgocjogUm93KSA9PiByLmdldERhdGEoKSkgOiBbXSxcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBlbWl0U2VsZWN0Um93KHJvdzogUm93KSB7XHJcbiAgICB0aGlzLnJvd1NlbGVjdC5lbWl0KHtcclxuICAgICAgZGF0YTogcm93ID8gcm93LmdldERhdGEoKSA6IG51bGwsXHJcbiAgICAgIGlzU2VsZWN0ZWQ6IHJvdyA/IHJvdy5nZXRJc1NlbGVjdGVkKCkgOiBudWxsLFxyXG4gICAgICBzb3VyY2U6IHRoaXMuc291cmNlLFxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxufVxyXG4iXX0=