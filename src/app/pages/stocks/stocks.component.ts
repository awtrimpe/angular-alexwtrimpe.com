import { Component, OnInit, ViewChild } from "@angular/core";
import { MatSnackBar } from "@angular/material/snack-bar";
import { MatSort } from "@angular/material/sort";
import { MatTableDataSource } from "@angular/material/table";
import { Stock } from "src/app/models/interfaces.models";
import { ImageService } from "src/app/services/image/image.service";
import { StockService } from "src/app/services/stocks/stocks.service";

@Component({
  templateUrl: "./stocks.component.html"
})
export class StocksComponent implements OnInit {
  constructor(
    private _imageService: ImageService,
    private _stockService: StockService,
    private _snackBar: MatSnackBar
  ) {}

  @ViewChild(MatSort, { static: false }) sort: MatSort;

  public goodStocks: MatTableDataSource<Stock>;
  public imageHeader: string;
  public displayedColumns = [
    "id",
    "price",
    "stockID",
    "stockName",
    "quarterPercentage",
    "yearPercentage"
  ];

  ngOnInit() {
    this._imageService.currentBackground.subscribe(
      background => (this.imageHeader = background)
    );
    this.getGoodStocks();
  }

  private getGoodStocks() {
    this._stockService.getGoodStocks().subscribe(
      resp => {
        this.goodStocks = new MatTableDataSource(resp);
        this.goodStocks.sort = this.sort;
      },
      _err => {
        this._snackBar.open("Error retrieving stocks", "X");
      }
    );
  }
}
