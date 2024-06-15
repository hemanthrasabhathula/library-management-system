import { Component, OnInit } from '@angular/core';
import { Copy } from 'src/app/models/copy.model';
import { CopyService } from 'src/app/services/copy.service';
import { NavigationExtras, Router } from '@angular/router';
import { SharedDataService } from 'src/app/services/shared-data.service';

@Component({
  selector: 'app-copies-list',
  templateUrl: './copies-list.component.html',
  styleUrls: ['./copies-list.component.scss']
})
export class CopiesListComponent implements OnInit {

  copies: Copy[] = [];
  constructor(private copyService: CopyService,private router: Router, private sharedDataService : SharedDataService) { }

  ngOnInit(): void {
    this.copyService.getallCopies().subscribe(data => {
      this.copies = data;
      console.log(this.copies);
    });
  }

  // navigateTo(copyId: String): void {
  //   this.router.navigate(['copy', copyId]); // Adjust the route as needed
  // }
  navigateTo(copy: Copy): void {
    this.sharedDataService.changeCopy(copy);
    this.copyService.setCopy(copy);
    const navigationExtras : NavigationExtras = {
      state: {
        copy : copy
      }
    };

    this.router.navigate(['copydetails'], navigationExtras); // Adjust the route as needed
  }

}
