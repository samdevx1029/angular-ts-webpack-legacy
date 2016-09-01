import { HamiltonPlateTrackerSpaPage } from './app.po';

describe('hamilton-plate-tracker-spa App', function() {
  let page: HamiltonPlateTrackerSpaPage;

  beforeEach(() => {
    page = new HamiltonPlateTrackerSpaPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
