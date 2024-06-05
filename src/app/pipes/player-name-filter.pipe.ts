import { Pipe, PipeTransform } from '@angular/core';
import { Player } from '../models/coaches.model';

@Pipe({
  name: 'playerNameFilter',
  standalone: true,
})
export class PlayerNameFilterPipe implements PipeTransform {
  transform(players: Player[], searchTerm: string): Player[] {
    if (!players || !searchTerm) {
      return players;
    }
    return players.filter((player) =>
      player.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }
}
