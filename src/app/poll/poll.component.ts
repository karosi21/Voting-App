import { Component, OnInit, EventEmitter } from '@angular/core';
import { Poll } from '../_models/poll';
import { PollService, AlertService } from '../_services/index'
import { Router } from '@angular/router';

@Component({
    moduleId: module.id,
    templateUrl: 'poll.component.html'
})

export class PollComponent implements OnInit {
    pollById:Poll;
    polls:Poll;
    _createPoll: boolean = false;
    regPoll: any = {};

    constructor(private pollService: PollService, private router: Router, private alertService: AlertService){

    }

    ngOnInit(){
    this.getPolls();
    }

    getPollById(id:string){
        this.pollService.getById(id).subscribe(poll => this.pollById = poll.response.data);
    }

    getPolls(){
        this.pollService.getAll().subscribe(poll =>  this.polls =  poll.response.data);
    }
    submitVote(answer){
        this.pollService.vote(this.pollById.id,answer).subscribe((res) =>{
            res;
        })
    }

    toCreatePoll(){
        this._createPoll = true;
    }

    createPoll(){
        this.pollService.create(this.regPoll)
            .subscribe(
                data => {
                    this.alertService.success('Poll was successfully created', true);
                    this.router.navigate(['/login']);
                },
                error => {
                    this.alertService.error(error);
                }
            )
    }

}