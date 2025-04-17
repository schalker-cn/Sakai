import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AccordionModule } from 'primeng/accordion';
import { MenuItem } from 'primeng/api';
import { ButtonModule } from 'primeng/button';
import { DividerModule } from 'primeng/divider';
import { FieldsetModule } from 'primeng/fieldset';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { InputTextModule } from 'primeng/inputtext';
import { MenuModule } from 'primeng/menu';
import { PanelModule } from 'primeng/panel';
import { RippleModule } from 'primeng/ripple';
import { SplitButtonModule } from 'primeng/splitbutton';
import { SplitterModule } from 'primeng/splitter';
import { StepperModule } from 'primeng/stepper';
import { TabsModule } from 'primeng/tabs';
import { ToolbarModule } from 'primeng/toolbar';

@Component({
    selector: 'app-panels-demo',
    standalone: true,
    imports: [
        CommonModule,
        FormsModule,
        ToolbarModule,
        ButtonModule,
        RippleModule,
        SplitButtonModule,
        AccordionModule,
        FieldsetModule,
        MenuModule,
        InputTextModule,
        DividerModule,
        SplitterModule,
        StepperModule,
        PanelModule,
        TabsModule,
        IconFieldModule,
        InputIconModule
    ],
    template: `
        <div class="flex flex-col">

            <div class="flex flex-col gap-8">
                <div class="w-full">
                    <div class="card">
                        <div class="font-semibold text-xl mb-4">Task Lifecycle Instructions</div>
                        <p-accordion value="0">
                            <p-accordion-panel value="0">
                                <p-accordion-header>Step 1: Create Task</p-accordion-header>
                                <p-accordion-content>
                                    <p class="m-0">
                                        To create a new task, follow these steps:
                                    </p>
                                    <ul>
                                        <li>Click on the "Menu" button located at the top-right corner of the screen.</li>
                                        <li>Select "New Task" from the dropdown menu.</li>
                                        <li>Fill in the task details such as name, description, and due date.</li>
                                        <li>Click on the "Create Task" button to save your task.</li>
                                    </ul>
                                    <p class="m-0">
                                        After this step, your task will be added to the task list.
                                    </p>
                                </p-accordion-content>
                            </p-accordion-panel>

                            <p-accordion-panel value="1">
                                <p-accordion-header>Step 2: Update Task Status</p-accordion-header>
                                <p-accordion-content>
                                    <p class="m-0">
                                        Once a task has started, you can update its status to track progress. To update the status:
                                    </p>
                                    <ul>
                                        <li>Go to the task list and find the task you want to update.</li>
                                        <li>Click on the task to open its detailed view.</li>
                                        <li>In the task details, you will see a dropdown menu labeled "Status."</li>
                                        <li>Select the appropriate status (e.g., "In Progress", "Pending Review", etc.).</li>
                                        <li>Click "Save" to update the status of the task.</li>
                                    </ul>
                                    <p class="m-0">
                                        This step helps keep track of the task's progress and ensures that the team is aware of its current status.
                                    </p>
                                </p-accordion-content>
                            </p-accordion-panel>

                            <p-accordion-panel value="2">
                                <p-accordion-header>Step 3: Task Completion and Removal</p-accordion-header>
                                <p-accordion-content>
                                    <p class="m-0">
                                        Once the task is completed, you can mark it as "Completed" and remove it from the task list. Here's how:
                                    </p>
                                    <ul>
                                        <li>Go to the task list and find the task you want to mark as completed.</li>
                                        <li>Click on the task to open its detailed view.</li>
                                        <li>In the task details, change the "Status" to "Completed".</li>
                                        <li>Click "Save" to confirm the change.</li>
                                        <li>After the task is marked as completed, you will have the option to remove it from the task list.</li>
                                        <li>Click the "Remove Task" button to permanently delete the task from the list.</li>
                                    </ul>
                                    <p class="m-0">
                                        After the task is removed, it will no longer appear in the task list.
                                    </p>
                                </p-accordion-content>
                            </p-accordion-panel>
                        </p-accordion>


                    </div>
                </div>
                <div class="w-full">
                <div class="card">
                    <div class="font-semibold text-xl mb-4">Task Progress</div>
                    <div class="text-surface-600 mb-2">Task: Frontend Development</div>
                    <p-stepper [value]="3">
                        <p-step-list>
                            <p-step [value]="1">Requirements Engineering</p-step>
                            <p-step [value]="2">UI Design</p-step>
                            <p-step [value]="3">Frontend Implementation</p-step>
                        </p-step-list>
                    </p-stepper>
                    <div class="mb-8"></div>
                    <div class="text-surface-600 mb-2">Task: Contract Negotiation</div>
                    <p-stepper [value]="1">
                        <p-step-list>
                        <p-step [value]="1">Initial Consultation</p-step>
                        <p-step [value]="2">Terms and Conditions Drafting</p-step>
                        <p-step [value]="3">Negotiation</p-step>
                        <p-step [value]="4">Signing</p-step>
                        </p-step-list>
                    </p-stepper>
                    <div class="mb-8"></div>
                    <div class="text-surface-600 mb-2">Task: Product Launch</div>
                    <p-stepper [value]="2">
                        <p-step-list>
                            <p-step [value]="1">Market Research</p-step>
                            <p-step [value]="2">Product Design</p-step>
                            <p-step [value]="3">Product Development</p-step>
                            <p-step [value]="4">Product Testing</p-step>
                            <p-step [value]="5">Product Launch</p-step>
                        </p-step-list>
                    </p-stepper>
                    <div class="mb-8"></div>
                    <div class="text-surface-600 mb-2">Task: Customer Support</div>
                    <p-stepper [value]="2">
                        <p-step-list>
                            <p-step [value]="1">Customer Inquiry</p-step>
                            <p-step [value]="2">Issue Identification</p-step>
                            <p-step [value]="3">Solution Offering</p-step>
                        </p-step-list>
                    </p-stepper>
                </div>
            </div>
            </div>
            `
})
export class PanelsDemo {
    items: MenuItem[] = [
        {
            label: 'Save',
            icon: 'pi pi-check'
        },
        {
            label: 'Update',
            icon: 'pi pi-upload'
        },
        {
            label: 'Delete',
            icon: 'pi pi-trash'
        },
        {
            label: 'Home Page',
            icon: 'pi pi-home'
        }
    ];
}
