import { NgModule } from "@angular/core";
import { Routes,RouterModule } from "@angular/router";
import { AppComponent } from "./app.component";
import { DailyComponent } from "./daily/daily.component";
import { WeatherCardComponent } from "./weather-card/weather-card.component";

const routes:Routes =[
    {
        path:'weather',
        component:AppComponent,
        children:[
            {
                path:'hourly',
                component:WeatherCardComponent
            },
            {
                path:'daily',
                component:DailyComponent
            }
        ]
        
    },
   
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