import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlockchainTransactionDetailsComponent } from './blockchain-transaction-details.component';

describe('BlockchainTransactionDetailsComponent', () => {
  let component: BlockchainTransactionDetailsComponent;
  let fixture: ComponentFixture<BlockchainTransactionDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlockchainTransactionDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BlockchainTransactionDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
