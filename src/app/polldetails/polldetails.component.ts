import { Component, OnInit } from '@angular/core';
import { PollService, AlertService } from '../_services/index';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
    moduleId: module.id,
    selector: 'pollanswer',
    templateUrl: 'polldetails.component.html'
})

export class PollDetailsComponent implements OnInit{
    //Private properties for binding
    private sub:any;
    private polldetail:any;

    constructor(private route: ActivatedRoute,  private pollService: PollService, private router: Router, private alertService: AlertService){
    }

    ngOnInit(){
        this.sub = this.route.params.subscribe(params =>{
            let id = params['id'];
            this.pollService.getPollById(id).subscribe(poll => this.polldetail = poll.response.data);
        });
    }

    ngOnDestroy(){
        this.sub.unsubscribe();
        }

     submitVote(answer) {
            this.pollService.vote(this.polldetail.id, answer).subscribe(res => { res;});
        }


}