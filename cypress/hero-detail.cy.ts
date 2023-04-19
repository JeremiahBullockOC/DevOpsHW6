/// <reference types="cypress" />
import { async, TestBed } from '@angular/core/testing';
import { HeroDetailComponent } from '../src/app/hero-detail/hero-detail.component';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

beforeEach(async(() => {
  TestBed.configureTestingModule({
    declarations: [HeroDetailComponent],
    imports: [RouterTestingModule, HttpClientTestingModule],
  }).compileComponents();
}));


describe('HeroDetailComponent', () => {
  it('mounts', () => {
    cy.mount(HeroDetailComponent);
  });

  it('Hero name should be in title', () => {
    cy.mount(HeroDetailComponent, {
      componentProperties: {
        hero: {
          id: 117,
          name: 'Master Chief'
        },
      },
    });
    cy.contains("MASTER CHIEF");

    });

    it('Hero should have id', () => {
      cy.mount(HeroDetailComponent, {
        componentProperties: {
          hero: {
            id: 117,
            name: 'Master Chief'
          },
        },
      });
      cy.contains("id: 117");
  
      });
});
