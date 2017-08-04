import { Component, OnInit, EventEmitter } from "@angular/core";
import { Poll } from "../_models/poll";
import { PollService, AlertService } from "../_services/index";
import { Router } from "@angular/router";

@Component({
  moduleId: module.id,
  templateUrl: "poll.component.html"
})
export class PollComponent implements OnInit {
  pollById: Poll;
  polls: Poll;
  _createPoll: boolean = false;

  constructor(
    private pollService: PollService,
    private router: Router,
    private alertService: AlertService
  ) {}

  ngOnInit() {
    this.getPolls();
  }
  
  getPolls() {
    this.pollService
      .getPolls()
      .subscribe(poll => (this.polls = poll.response.data));
  }


}
