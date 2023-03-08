import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { HttpClient } from '@angular/common/http';
import { MatPaginator } from '@angular/material/paginator';
import { Peliculas } from '../models/peliculas-data';
import { UserList } from '../models/userlist-data';


@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.scss'],
})
export class DataTableComponent implements OnInit, AfterViewInit{
  peliculas: Peliculas[] = [];
  users: UserList[] = [];
  activeUser: any = sessionStorage.getItem('activeUser');

  displayedColumns: string[] = ['id', 'nombre', 'director', 'clasificacion'];
  dataSource = new MatTableDataSource<Peliculas>();

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private http: HttpClient) {}
  indexOfUser: any;

  ngOnInit(): void {
    this.http
      .get<UserList[]>('http://localhost:3000/users')
      .subscribe((res) => {
        this.users = res;
        this.indexOfUser = this.users.findIndex(
          (user) => user.user == this.activeUser
        );
        this.peliculas = this.users[this.indexOfUser].peliculas;
        this.dataSource.data = this.peliculas;
      });
  }
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}
