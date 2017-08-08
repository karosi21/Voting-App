import { Component, OnInit , OnDestroy} from '@angular/core';
import { PollService, AlertService, PollDataService } from '../_services/index';
import { PollAnswer } from '../_models/pollanswer';
import { PollComponent } from '../poll/poll.component';
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
    private result: PollAnswer;
    private getPollOptions: any ;
    private answerPollKey:any;
    private answerPollValues:any;
    private listPolls:any;

       constructor(private route: ActivatedRoute, private pollService: PollService, 
                          private router: Router, private alertService: AlertService,
                          private pollsData: PollDataService  ){}

        ngOnInit(){
            this.sub = this.route.params.subscribe(params =>{
                let id = params['id'];
                this.pollService.getPollById(id).subscribe(poll => this.polldetail = poll.response.data);
            });

            this.pollService.getPolls().subscribe( polls =>  this.getPollOptions = polls.response.data);
          this.listPolls = this.pollsData.listPoll ?  this.pollsData.listPoll : [];
          // this.getChartLabel();
          }

        ngOnDestroy(){
            this.sub.unsubscribe();
            }

        submitVote(answer) {
                let ans = confirm("You select "+answer.content);
                if(ans == true){
                  this.pollService.vote(this.polldetail.id, answer).subscribe(res => { res});
                }
                else{
                window.location.reload(true);
                return;
                }
            }
        
         getChartLabel(){
             let userAnswers = [];
             console.log(this.listPolls); 


          this.listPolls.forEach(i =>{
                if(this.polldetail.id == i.id){
                  i.answers.forEach( j =>{
                  userAnswers.push(j.content);
                  })
                }
            })

          let result = {};
          for(let i = 0; i < userAnswers.length; ++i){
            if(!result[userAnswers[i]])
                result[userAnswers[i]] = 0;
            ++result[userAnswers[i]];
          }

         this.answerPollKey     =   Object.keys(result);
         this.answerPollValues =   (<any>Object).values(result);
        
        }

          // Doughnut
      public doughnutChartLabels:string[]  //= this.answerPollKey;                //= this.answerPollValues; //['Download Sales', 'In-Store Sales', 'Mail-Order Sales','Hello'];
      public doughnutChartData:number[]  = [5] //=  this.answerPollValues;  // = this.answerPollValues ; //=  [350, 450, 900, 90];
      public doughnutChartType:string = 'doughnut';

      // events
      public chartClicked(e:any):void {
        console.log(e);
      }
    
      public chartHovered(e:any):void {
        console.log(e);
      }
}