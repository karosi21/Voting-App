import { Component } from '@angular/core';
import { Poll } from '../_models/poll';
import { PollService, AlertService } from '../_services/index';
import { Router } from '@angular/router';

@Component({
    moduleId: module.id,
    templateUrl: "createpoll.component.html"
})

export class CreatePollComponent {
    regPoll: any = {}; 
    constructor(
        private pollService: PollService,
        private router: Router,
        private alertService: AlertService
    ){}

      createPoll() {
    this.pollService.create(this.regPoll).subscribe(
      data => {
        this.alertService.success("Poll was successfully created", true);
        this.router.navigate(["/"]);
      },
      error => {
        this.alertService.error(error);
      }
    );
  }
}