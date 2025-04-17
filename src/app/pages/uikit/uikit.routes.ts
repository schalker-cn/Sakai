import { Routes } from '@angular/router';
import { ListDemo } from './listdemo';
import { PanelsDemo } from './panelsdemo';
import { TableDemo } from './tabledemo';
import { TreeDemo } from './treedemo';

export default [
    { path: 'list', data: { breadcrumb: 'List' }, component: ListDemo },
    { path: 'panel', data: { breadcrumb: 'Panel' }, component: PanelsDemo },
    { path: 'table', data: { breadcrumb: 'Table' }, component: TableDemo },
    { path: 'tree', data: { breadcrumb: 'Tree' }, component: TreeDemo },
    { path: '**', redirectTo: '/notfound' }
] as Routes;
