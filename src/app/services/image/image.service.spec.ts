import { async, getTestBed, TestBed } from "@angular/core/testing";
import { ImageService } from "src/app/services/image/image.service";

// =========== TEST SETUP ===================================
describe("ImageService", () => {
  let imageService: ImageService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      providers: [ImageService]
    }).compileComponents();
  }));

  beforeEach(() => {
    const injector = getTestBed();
    imageService = injector.get(ImageService);
  });

  // =========== TESTS ======================================
  describe("#changeBackground()", () => {
    it("should return image in subscription which was passed", () => {
      let imageHeader: string;
      imageService.changeBackground("newBackground.jpg");
      imageService.currentBackground.subscribe(
        background => (imageHeader = background)
      );
      expect(imageHeader).toBe("assets/images/newBackground.jpg");
    });
  });
});
