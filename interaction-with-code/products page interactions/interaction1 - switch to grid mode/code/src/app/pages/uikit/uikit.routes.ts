import { Routes } from '@angular/router';
import { ListDemo } from './listdemo';
import { TableDemo } from './tabledemo';
import { TreeDemo } from './treedemo';

export default [
    { path: 'list', data: { breadcrumb: 'List' }, component: ListDemo },
    { path: 'table', data: { breadcrumb: 'Table' }, component: TableDemo },
    { path: 'tree', data: { breadcrumb: 'Tree' }, component: TreeDemo },
    { path: '**', redirectTo: '/notfound' }
] as Routes;
