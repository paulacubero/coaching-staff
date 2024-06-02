import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableModule } from 'primeng/table';
import { TagModule } from 'primeng/tag';
import { BadgeModule } from 'primeng/badge';
import { Player, Columns } from 'src/app/models/coaches.model';
import {
  DEFAULT_AVATAR,
  SQUAD_LIST_COLUMNS,
  TABLE_HEADERS_SQUAD_LIST,
} from 'src/app/constants/constants';
import { ButtonModule } from 'primeng/button';
import jsPDF from 'jspdf';
import 'jspdf-autotable';
import { FormsModule } from '@angular/forms';
import { Observable } from 'rxjs';
import { PlayersService } from 'src/app/services/players.service';

@Component({
  selector: 'app-squad-list',
  standalone: true,
  imports: [
    CommonModule,
    TableModule,
    TagModule,
    ButtonModule,
    BadgeModule,
    FormsModule,
  ],
  templateUrl: './squad-list.component.html',
  styleUrls: ['./squad-list.component.scss'],
})
export class SquadListComponent implements OnInit {
  players$: Observable<Player[]> = this._playersService.getPlayers();
  selectedplayers: Player[] = [];
  headers!: string[];
  squadListColumns!: Columns[];

  constructor(private _playersService: PlayersService) {
    this.isRowSelectable = this.isRowSelectable.bind(this);
  }

  ngOnInit() {
    this.headers = TABLE_HEADERS_SQUAD_LIST;
    this.squadListColumns = SQUAD_LIST_COLUMNS as Columns[];
  }

  exportPdf() {
    const doc = new jsPDF('p', 'px', 'a4');
    (doc as any).autoTable({
      head: [this.squadListColumns.map((col) => col.header)],
      body: this.selectedplayers.map((player) =>
        this.squadListColumns.map((col) => player[col.dataKey])
      ),
    });
    doc.save('convocatoria.pdf');
  }

  isRowSelectable(event: any) {
    return !this.isInjured(event.data);
  }

  isInjured(player: Player) {
    return !player.available;
  }

  getImage(player: Player) {
    return player.img ? player.img : DEFAULT_AVATAR;
  }
}
