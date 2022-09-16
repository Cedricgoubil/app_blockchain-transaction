import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlockchainTransactionListComponent } from './blockchain-transaction-list.component';

describe('BlockchainTransactionListComponent', () => {
  let component: BlockchainTransactionListComponent;
  let fixture: ComponentFixture<BlockchainTransactionListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlockchainTransactionListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BlockchainTransactionListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
