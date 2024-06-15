import { Component, OnInit } from '@angular/core';
import { CopyService } from 'src/app/services/copy.service';
import { ActivatedRoute, Route, Router } from '@angular/router'; // Step 1: Import ActivatedRoute
import { Copy } from 'src/app/models/copy.model';
import { Branch } from 'src/app/models/branch.model';
import { BranchService } from 'src/app/services/branch.service';
import { SharedDataService } from 'src/app/services/shared-data.service';
@Component({
  selector: 'app-copies-detail',
  templateUrl: './copies-detail.component.html',
  styleUrls: ['./copies-detail.component.scss']
})
export class CopiesDetailComponent implements OnInit {
  copy : Copy = new Copy();
  copies : Copy[] = [];
  branches : Branch[] = [];
  constructor(private copyService: CopyService, private route: ActivatedRoute,private branchService : BranchService, private router : Router, private sharedDataService: SharedDataService) { }

  ngOnInit(): void {
    console.log("copy details");
    this.sharedDataService.currentCopy.subscribe(copy => {
      if (copy) {
        this.copy = copy;
        console.log(this.copy);
        this.copyService.getCopiesByISBN(this.copy.ISBN).subscribe(data => {
              this.copies = data;
              console.log(this.copies);
            });
      } else {
        this.router.navigate(['copies']);
      }
    });

 

  }

}
