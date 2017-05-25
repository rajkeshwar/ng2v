import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Ng2vToastyComponent } from './toasty.component';
import { Ng2vToastyConfig, Ng2vToastyService, Ng2vToastOptions, Ng2vToastData } from './toasty.service';
import { Ng2vToastComponent } from './toast.component';

export { Ng2vToastyConfig, Ng2vToastyService, Ng2vToastOptions, Ng2vToastData } from './toasty.service';
export { Ng2vToastComponent } from './toast.component';

const NG2V_TOASTY_MODULES = [
    Ng2vToastyComponent, 
    Ng2vToastComponent    
];

@NgModule({
    imports: [CommonModule],
    declarations: NG2V_TOASTY_MODULES,
    exports: NG2V_TOASTY_MODULES,
    providers: [Ng2vToastyConfig, Ng2vToastyService, Ng2vToastOptions, Ng2vToastData]
})
export class Ng2vToastyModule {
    static forRoot(): ModuleWithProviders {
        return { ngModule: Ng2vToastyModule, providers: [Ng2vToastyConfig]}
    }
}