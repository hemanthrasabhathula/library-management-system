import { Component, OnInit } from '@angular/core';
import { Branch } from 'src/app/models/branch.model';
import { BranchService } from 'src/app/services/branch.service';

@Component({
  selector: 'app-branch-list',
  templateUrl: './branch-list.component.html',
  styleUrls: ['./branch-list.component.scss']
})
export class BranchListComponent implements OnInit {
  branches: Branch[] = [];
  constructor(private branchService: BranchService) { }

  ngOnInit(): void {
    this.branchService.getAllBranches().subscribe(data => {
      this.branches = data;
      console.log(this.branches);
    });
  }

}
