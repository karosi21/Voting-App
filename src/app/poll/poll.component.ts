import { Component, OnInit, OnDestroy, Input } from "@angular/core";
import { Poll } from "../_models/poll";
import { PollService, AlertService , PollDataService} from "../_services/index";
import { Router } from "@angular/router";

@Component({
  moduleId: module.id,
  templateUrl: "poll.component.html"
})
export class PollComponent implements OnInit {
  pollById: Poll;
  public polls: Poll;
  _createPoll: boolean = false;

  constructor(
    private pollService: PollService,
    private router: Router,
    private alertService: AlertService, private pollsData: PollDataService
  ) {}

  ngOnInit() {
    this.getPolls();
    // this.pollsData.listPoll =   this.pollService
    //   .getPolls()
    //   .subscribe(poll => console.log(this.polls = poll.response.data));
  }
  
  getPolls() {
    this.pollService
      .getPolls()
      .subscribe(poll => (this.polls = poll.response.data));
  }

  ngOnDestroy(){
    this.pollsData.listPoll =   this.polls;
  }


}
