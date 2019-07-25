import { Component, OnInit } from '@angular/core';
import{Router , ActivatedRoute}from '@angular/router'

@Component({
  selector: 'app-next',
  templateUrl: './next.component.html',
  styleUrls: ['./next.component.css']
})
export class NextComponent implements OnInit {

  
  constructor(
    private route :Router,
    private routes : ActivatedRoute,
) { }

obj=[
  {id:1,
   page:"one"
    },
    {
        id:2,
        page:"two"
    }
]
onnext(obj){
this.route.navigate(['/nextpath'],{
  queryParams:{page:obj.page},
}

)
}
pages;
  ngOnInit() {
    this.routes.queryParams.subscribe(para=>{
      this.pages=para['page']
    })
  }

}
