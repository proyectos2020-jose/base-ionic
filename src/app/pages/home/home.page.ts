import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  title: string = 'home';

  components: ComponentWrap[] = [{
    icon: 'american-footbal',
    redirectTo: '/action-sheet',
    title: 'Action Sheet'
  },
    {
      icon: 'appstore',
      redirectTo: '/alert',
      title: 'Alert'
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}

interface ComponentWrap {
  icon: string,
  redirectTo: string,
  title: string
}
