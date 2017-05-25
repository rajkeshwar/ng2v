import { Component, OnInit, Injectable } from '@angular/core';
// import {Ng2vToastyService, Ng2vToastyConfig, Ng2vToastOptions, Ng2vToastData} from '@ng2v/ng2v-components';
// import {Subject, Observable, Subscription} from 'rxjs/Rx';

@Component({
  selector: 'ng2vd-sidemenu-config',
  templateUrl: './sidemenu-config.html',
})
export class Ng2vdSidemenuConfig implements OnInit {

  public menus:Array<any>;

//   constructor(
//     private toastyService: Ng2vToastyService, 
//     private toastCommunicationService: Ng2vToastCommunicationService) { }
  
  ngOnInit() {
      this.menus = [
        {'icon':'fa-home', label: 'Home', href:'keymetrics'},
        {'icon':'fa-line-chart', label: 'TSI', subMenus:[
            {'icon':'fa-line-chart', label: 'Insights'},
            {'icon':'fa-line-chart', label: 'Variance'},
            {'icon':'fa-line-chart', label: 'Advicer'}
        ]},
        {'icon':'fa-dashboard', label: 'Dashboard', href:'http://.../workbench'},
        {'icon':'fa-list-alt', label: 'AEM', href:'http://10.10.10.108:7080/'},
    ];
  }

//   themes = [{
//         name: 'Default Theme',
//         code: 'default'
//     }, {
//         name: 'Material Design',
//         code: 'material'
//     }, {
//         name: 'Bootstrap 3',
//         code: 'bootstrap'
//     }];

//     types = [{
//         name: 'Default',
//         code: 'default',
//     }, {
//         name: 'Info',
//         code: 'info'
//     }, {
//         name: 'Success',
//         code: 'success'
//     }, {
//         name: 'Wait',
//         code: 'wait'
//     }, {
//         name: 'Error',
//         code: 'error'
//     }, {
//         name: 'Warning',
//         code: 'warning'
//     }];

//     positions = [{
//         name: 'Top Left',
//         code: 'top-left',
//     }, {
//         name: 'Top Center',
//         code: 'top-center',
//     }, {
//         name: 'Top Right',
//         code: 'top-right',
//     }, {
//         name: 'Bottom Left',
//         code: 'bottom-left',
//     }, {
//         name: 'Bottom Center',
//         code: 'bottom-center',
//     }, {
//         name: 'Bottom Right',
//         code: 'bottom-right',
//     }, {
//         name: 'Center Center',
//         code: 'center-center',
//     }];

//     position: string = this.positions[5].code;

//     options = {
//         title: 'Toast It!',
//         msg: 'Mmmm, tasties...',
//         showClose: true,
//         timeout: 5000,
//         theme: this.themes[0].code,
//         type: this.types[0].code
//     };

//     getTitle(num: number): string {
//         return 'Countdown: ' + num;
//     }

//     getMessage(num: number): string {
//         return 'Seconds left: ' + num;
//     }

//     newToast() {
//         let toastOptions: Ng2vToastOptions = {
//             title: this.options.title,
//             msg: this.options.msg,
//             showClose: this.options.showClose,
//             timeout: this.options.timeout,
//             theme: this.options.theme,
//             // position: this.options.position,
//             onAdd: (toast: Ng2vToastData) => {
//                 console.log('Toast ' + toast.id + ' has been added!');
//             },
//             onRemove: function(toast: Ng2vToastData) {
//                 console.log('Toast ' + toast.id + ' has been removed!');
//             }
//         };

//         switch (this.options.type) {
//             case 'default': this.toastyService.default(toastOptions); break;
//             case 'info': this.toastyService.info(toastOptions); break;
//             case 'success': this.toastyService.success(toastOptions); break;
//             case 'wait': this.toastyService.wait(toastOptions); break;
//             case 'error': this.toastyService.error(toastOptions); break;
//             case 'warning': this.toastyService.warning(toastOptions); break;
//         }
//     }

//     newCountdownToast() {
//         let interval = 1000;
//         let seconds = this.options.timeout / 1000;
//         let subscription: Subscription;

//         let toastOptions: Ng2vToastOptions = {
//             title: this.getTitle(seconds || 0),
//             msg: this.getMessage(seconds || 0),
//             showClose: this.options.showClose,
//             timeout: this.options.timeout,
//             theme: this.options.theme,
//             onAdd: (toast: Ng2vToastData) => {
//                 console.log('Toast ' + toast.id + ' has been added!');
//                 // Run the timer with 1 second iterval
//                 let observable = Observable.interval(interval).take(seconds);
//                 // Start listen seconds bit
//                 subscription = observable.subscribe((count: number) => {
//                     // Update title
//                     toast.title = this.getTitle(seconds - count - 1 || 0);
//                     // Update message
//                     toast.msg = this.getMessage(seconds - count - 1 || 0);
//                 });

//             },
//             onRemove: function(toast: Ng2vToastData) {
//                 console.log('Toast ' + toast.id + ' has been removed!');
//                 // Stop listenning
//                 subscription.unsubscribe();
//             }
//         };

//         switch (this.options.type) {
//             case 'default': this.toastyService.default(toastOptions); break;
//             case 'info': this.toastyService.info(toastOptions); break;
//             case 'success': this.toastyService.success(toastOptions); break;
//             case 'wait': this.toastyService.wait(toastOptions); break;
//             case 'error': this.toastyService.error(toastOptions); break;
//             case 'warning': this.toastyService.warning(toastOptions); break;
//         }
//     }

//     clearToasties() {
//         this.toastyService.clearAll();
//     }

//     changePosition($event) {
//         this.position = $event;
//         // Update position of the Toasty Component
//         this.toastCommunicationService.setPosition(this.position);
//     }

}

// @Injectable()
// export class Ng2vToastCommunicationService {
//     // Observable string sources
//     private positionSource = new Subject<string>();

//     // Observable string streams
//     position$ = this.positionSource.asObservable();

//     setPosition(position) {
//         this.positionSource.next(position);
//     }
// }