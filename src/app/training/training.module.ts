import { TrainingRoutingModule } from './training-routing.module';
import { StopTrainingComponentComponent } from './../stop-training-component/stop-training-component.component';
import { CurrentTrainingComponent } from './current-training/current-training.component';
import { TrainingComponent } from './training.component';
import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { NewTrainingComponent } from './new-training/new-training.component';
import { PastTrainingComponent } from './past-training/past-training.component';


@NgModule({
  declarations: [
    TrainingComponent,
    CurrentTrainingComponent,
    NewTrainingComponent,
    PastTrainingComponent,
    StopTrainingComponentComponent
  ],
  imports: [SharedModule, TrainingRoutingModule],
  entryComponents: [StopTrainingComponentComponent]
})
export class TrainingModule {}
