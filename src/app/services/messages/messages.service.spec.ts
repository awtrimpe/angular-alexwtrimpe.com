import { HttpClientTestingModule } from "@angular/common/http/testing";
import { async, getTestBed, TestBed } from "@angular/core/testing";
import { Message } from "src/app/models/interfaces.models";
import { MessageService } from "src/app/services/messages/messages.service";

// ================== TEST DATA =============================
const message: Message = {
  email: "cmorgan@aol.com",
  id: 1,
  message: "Please drink responsibly.",
  name: "Captain Morgan",
  subject: "Live Like The Captain"
};

// =========== TEST SETUP ===================================
describe("MessageService", () => {
  let messageService: MessageService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [MessageService]
    }).compileComponents();
  }));

  beforeEach(() => {
    const injector = getTestBed();
    messageService = injector.get(MessageService);
  });

  // =========== TESTS ======================================
  describe("#getMessages()", () => {
    it("should return on function call", () => {
      const resp = messageService.getMessages();
      expect(resp).toBeDefined();
    });
  });

  describe("#submitMessage()", () => {
    it("should return on function call", () => {
      const resp = messageService.submitMessage(message);
      expect(resp).toBeDefined();
    });
  });
});
