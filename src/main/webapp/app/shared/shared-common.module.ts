import { NgModule } from '@angular/core';

import { GolfPlayerTimeManagerSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent } from './';

@NgModule({
    imports: [GolfPlayerTimeManagerSharedLibsModule],
    declarations: [JhiAlertComponent, JhiAlertErrorComponent],
    exports: [GolfPlayerTimeManagerSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent]
})
export class GolfPlayerTimeManagerSharedCommonModule {}
