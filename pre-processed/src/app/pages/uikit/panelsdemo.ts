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
        PanelModule,
        TabsModule,
        IconFieldModule,
        InputIconModule
    ],
    template: `
        <div class="flex flex-col">
            <div class="flex flex-col md:flex-row gap-8">
                <div class="md:w-1/2">
                    <div class="card">
                        <div class="font-semibold text-xl mb-4">Accordion</div>
                        <p-accordion value="0">
                            <p-accordion-panel value="0">
                                <p-accordion-header>Header I</p-accordion-header>
                                <p-accordion-content>
                                    <p class="m-0">
                                        This is a brief placeholder text used to test layout, spacing, and overall readability. It carries no specific meaning but provides a natural sentence flow for design or formatting purposes. Replace it with your final content when ready, or adjust the length and tone as needed.
                                    </p>
                                </p-accordion-content>
                            </p-accordion-panel>

                            <p-accordion-panel value="1">
                                <p-accordion-header>Header II</p-accordion-header>
                                <p-accordion-content>
                                    <p class="m-0">
                                        This is a brief placeholder text used to test layout, spacing, and overall readability. It carries no specific meaning but provides a natural sentence flow for design or formatting purposes. Replace it with your final content when ready, or adjust the length and tone as needed.
                                    </p>
                                </p-accordion-content>
                            </p-accordion-panel>

                            <p-accordion-panel value="2">
                                <p-accordion-header>Header III</p-accordion-header>
                                <p-accordion-content>
                                    <p class="m-0">
                                        This is a brief placeholder text used to test layout, spacing, and overall readability. It carries no specific meaning but provides a natural sentence flow for design or formatting purposes. Replace it with your final content when ready, or adjust the length and tone as needed.
                                    </p>
                                </p-accordion-content>
                            </p-accordion-panel>
                        </p-accordion>
                    </div>
                    <div class="card">
                        <div class="font-semibold text-xl mb-4">Tabs</div>
                        <p-tabs value="0">
                            <p-tablist>
                                <p-tab value="0">Header I</p-tab>
                                <p-tab value="1">Header II</p-tab>
                                <p-tab value="2">Header III</p-tab>
                            </p-tablist>
                            <p-tabpanels>
                                <p-tabpanel value="0">
                                    <p class="m-0">
                                        This is a brief placeholder text used to test layout, spacing, and overall readability. It carries no specific meaning but provides a natural sentence flow for design or formatting purposes. Replace it with your final content when ready, or adjust the length and tone as needed.
                                    </p>
                                </p-tabpanel>
                                <p-tabpanel value="1">
                                    <p class="m-0">
                                        This is a brief placeholder text used to test layout, spacing, and overall readability. It carries no specific meaning but provides a natural sentence flow for design or formatting purposes. Replace it with your final content when ready, or adjust the length and tone as needed.
                                    </p>
                                </p-tabpanel>
                                <p-tabpanel value="2">
                                    <p class="m-0">
                                        This is a brief placeholder text used to test layout, spacing, and overall readability. It carries no specific meaning but provides a natural sentence flow for design or formatting purposes. Replace it with your final content when ready, or adjust the length and tone as needed.
                                    </p>
                                </p-tabpanel>
                            </p-tabpanels>
                        </p-tabs>
                    </div>
                </div>
                <div class="md:w-1/2 mt-6 md:mt-0">
                    <div class="card">
                        <div class="font-semibold text-xl mb-4">Panel</div>
                        <p-panel header="Header" [toggleable]="true">
                            <p class="m-0">
                                This is a brief placeholder text used to test layout, spacing, and overall readability. It carries no specific meaning but provides a natural sentence flow for design or formatting purposes. Replace it with your final content when ready, or adjust the length and tone as needed.
                            </p>
                        </p-panel>
                    </div>
                    <div class="card">
                        <div class="font-semibold text-xl mb-4">Fieldset</div>
                        <p-fieldset legend="Legend" [toggleable]="true">
                            <p class="m-0">
                                This is a brief placeholder text used to test layout, spacing, and overall readability. It carries no specific meaning but provides a natural sentence flow for design or formatting purposes. Replace it with your final content when ready, or adjust the length and tone as needed.
                            </p>
                        </p-fieldset>
                    </div>
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
