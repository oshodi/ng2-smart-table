import { SimpleChange, EventEmitter, OnChanges } from '@angular/core';
import { Grid } from './lib/grid';
import { DataSource } from './lib/data-source/data-source';
import { Row } from './lib/data-set/row';
export declare class Ng2SmartTableComponent implements OnChanges {
    source: any;
    settings: Object;
    rowSelect: EventEmitter<any>;
    userRowSelect: EventEmitter<any>;
    delete: EventEmitter<any>;
    edit: EventEmitter<any>;
    create: EventEmitter<any>;
    custom: EventEmitter<any>;
    deleteConfirm: EventEmitter<any>;
    editConfirm: EventEmitter<any>;
    createConfirm: EventEmitter<any>;
    rowHover: EventEmitter<any>;
    tableClass: string;
    tableId: string;
    perPageSelect: any;
    isHideHeader: boolean;
    isHideSubHeader: boolean;
    isPagerDisplay: boolean;
    rowClassFunction: Function;
    grid: Grid;
    defaultSettings: Object;
    isAllSelected: boolean;
    ngOnChanges(changes: {
        [propertyName: string]: SimpleChange;
    }): void;
    editRowSelect(row: Row): void;
    onUserSelectRow(row: Row): void;
    onRowHover(row: Row): void;
    multipleSelectRow(row: Row): void;
    onSelectAllRows($event: any): void;
    onSelectRow(row: Row): void;
    onMultipleSelectRow(row: Row): void;
    initGrid(): void;
    prepareSource(): DataSource;
    prepareSettings(): Object;
    changePage($event: any): void;
    sort($event: any): void;
    filter($event: any): void;
    private resetAllSelector;
    private emitUserSelectRow;
    private emitSelectRow;
}
