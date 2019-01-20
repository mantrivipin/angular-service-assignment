export class CounterService {
	inactiveToActiveCount: number = 0;
	activeToInactiveCount: number = 0;
	updateCount(status: string) {
		if(status == 'active') {
			console.log("Inactive to active count:"+ ++this.inactiveToActiveCount);
		} else {
			console.log("Active to Inactive count:"+ ++this.activeToInactiveCount);
		}
	}
}