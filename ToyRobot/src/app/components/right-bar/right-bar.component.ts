import { Component, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { ConnectorService } from 'src/app/services/connector.service';
import { Robot } from '../class/shared';

@Component({
  selector: 'app-right-bar',
  templateUrl: './right-bar.component.html',
  styleUrls: ['./right-bar.component.scss']
})
export class RightBarComponent implements OnDestroy {
  writeReportSubs: Subscription;
  errorSubs: Subscription;
  report!: string;
  error!: string
  private timeout: any;

  constructor(private readonly connector: ConnectorService) {
    this.writeReportSubs = this.connector.writeReport$.subscribe({
      next: (report: string) => {
        this.clear();
        this.report = report;
        this.timeout = setTimeout(() => this.report = '', 5000);
      }
    });
    this.errorSubs = this.connector.error$.subscribe({
      next: (error: string) => {
        this.clear();
        this.error = error;
        this.timeout = setTimeout(() => this.error = '', 3000);
      }
    });
  }

  private clear(): void {
    if(this.timeout) {
      this.report = '';
      this.error = '';
      clearTimeout(this.timeout);
    }
  }

  ngOnDestroy(): void {
    this.writeReportSubs?.unsubscribe();
    this.errorSubs?.unsubscribe();
  }
}
