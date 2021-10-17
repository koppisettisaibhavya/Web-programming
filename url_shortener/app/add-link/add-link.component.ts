import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LinkService } from '../link.service';
import { Link } from '../modal';


@Component({
  selector: 'app-add-link',
  templateUrl: './add-link.component.html',
  styleUrls: ['./add-link.component.css']
})
export class AddLinkComponent implements OnInit {
  linkform: FormGroup;
  list: Array<Link> = [];
  obj: Link = Object();
  constructor(private serv: LinkService, private router: Router) {
    this.linkform = new FormGroup({
      'link': new FormControl('', [Validators.pattern("((http|https)://)(www.)?" + "[a-zA-Z0-9@:%._\\+~#?&//=]{2,256}\\.[a-z]" + "{2,6}\\b([-a-zA-Z0-9@:%._\\+~#?&//=]*)"),
      Validators.required])
    })
  }

  ngOnInit(): void {
  }
  getunique() {
    let str = "ABCDEFabcdef123456";
    let targ: string = "";
    for (let i = 0; i < 4; i++) {
      targ += str.charAt(Math.floor(Math.random() * 18));
    }

    return targ;
  }


  shorten(): void {
    //let obj:Link;
    //console.log(this.linkform.controls.link.value);
    if (this.linkform.controls.link instanceof FormControl) {
      this.linkform.controls.link.markAsTouched({ onlySelf: true });
    }
    if (this.linkform.valid) {
      this.obj.short = this.getunique();
      this.obj.url = this.linkform.controls.link.value
      this.obj.no_of_clicks=0;
      this.serv.savelink(this.obj).subscribe(() => {
        this.router.navigate(['./link-list']);
      });
    }

  }
}
