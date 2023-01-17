import { NgModule } from "@angular/core";
import { Routes,RouterModule } from "@angular/router";
import { DailyComponent } from "./daily/daily.component";
import { HourlyComponent } from "./hourly/hourly.component";

const routes:Routes =[
    {
        path:'weather/daily',
        component:DailyComponent
         
     },
     {
         path:'weather/hourly',
         component:HourlyComponent
     }
   
]


@NgModule({
    imports:[
        RouterModule.forRoot(routes)
    ],
    exports:[
        RouterModule
    ]

})
export class AppRoutingModule{

}