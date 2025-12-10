import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, Send, X, Bot, User } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ScrollArea } from '@/components/ui/scroll-area';

interface Message {
  id: string;
  content: string;
  isBot: boolean;
  timestamp: Date;
}

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      content: "Hi! I'm your AI assistant. I can help you learn more about our outbound installation system and how we can help scale your sales outreach. What would you like to know?",
      isBot: true,
      timestamp: new Date(),
    },
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const getBotResponse = (userMessage: string): string => {
    const message = userMessage.toLowerCase();
    
    if (message.includes('price') || message.includes('cost') || message.includes('pricing')) {
      return "Our outbound installation system starts from $5,300/month with our Installation Starter (1 BDR). We also offer Growth Plugin ($7,500/month, 2 BDRs), Scale Plugin ($9,500/month, 3 BDRs), and Enterprise Plugin ($12,000/month, 4 BDRs). Each includes copywriter, GTM engineer, AI tech stack, and dedicated BDR talent. Would you like to use our ROI calculator to see potential returns?";
    }
    
    if (message.includes('what') && (message.includes('do') || message.includes('service'))) {
      return "We provide a complete outbound installation system that combines AI-powered tools, proven strategies, and expert BDR talent. Think of it as a plug-and-play solution that integrates seamlessly with your company to scale your sales outreach without the hassle of building an internal team.";
    }
    
    if (message.includes('how') && message.includes('work')) {
      return "Our outbound installation works in 3 steps: 1) We integrate our proven tech stack with your systems, 2) Deploy our trained BDR talent using our tested strategies, 3) Scale your outbound operations with measurable results. It's like having a complete sales development department without the overhead.";
    }
    
    if (message.includes('roi') || message.includes('return')) {
      return "Our clients typically see 300-500% ROI within the first year. With our Installation Starter at $5,300/month, you could potentially generate $180K+ in annual pipeline value. Check out our ROI calculator on the page to see projections based on your specific metrics.";
    }
    
    if (message.includes('team') || message.includes('bdr')) {
      return "Our BDR talent is carefully vetted and trained on our proven methodologies. Each BDR is equipped with our complete tech stack and follows our tested strategies. You get dedicated professionals without the hiring, training, and management overhead.";
    }
    
    if (message.includes('start') || message.includes('begin') || message.includes('get started')) {
      return "Getting started is simple! Book a consultation with our team to discuss your specific needs. We'll analyze your current outbound efforts and show you exactly how our installation system can scale your results. Ready to schedule a call?";
    }
    
    if (message.includes('tool') || message.includes('tech') || message.includes('software')) {
      return "Our tech stack includes leading outbound tools for prospecting, email automation, CRM integration, and analytics. Everything is pre-configured and optimized based on thousands of successful campaigns. No need to research, buy, or configure tools yourself.";
    }
    
    return "That's a great question! Our outbound installation system is designed to help companies scale their sales development without the complexity of building internal teams. Would you like to know more about our pricing, how it works, or see some ROI projections? You can also book a consultation to discuss your specific needs.";
  };

  const handleSendMessage = async () => {
    if (!inputMessage.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      content: inputMessage,
      isBot: false,
      timestamp: new Date(),
    };

    setMessages(prev => [...prev, userMessage]);
    setInputMessage('');
    setIsTyping(true);

    // Simulate typing delay
    setTimeout(() => {
      const botResponse: Message = {
        id: (Date.now() + 1).toString(),
        content: getBotResponse(inputMessage),
        isBot: true,
        timestamp: new Date(),
      };
      setMessages(prev => [...prev, botResponse]);
      setIsTyping(false);
    }, 1500);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };

  return (
    <>
      {/* Chat Toggle Button */}
      <Button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-50 rounded-full h-14 w-14 shadow-lg hover:shadow-xl transition-all duration-300"
        size="lg"
      >
        {isOpen ? (
          <X className="h-6 w-6" />
        ) : (
          <MessageCircle className="h-6 w-6" />
        )}
      </Button>

      {/* Chat Window */}
      {isOpen && (
        <Card className="fixed bottom-24 right-6 z-40 w-80 h-96 shadow-2xl border-0 bg-card">
          <CardHeader className="pb-3">
            <CardTitle className="flex items-center gap-2 text-lg">
              <Bot className="h-5 w-5 text-primary" />
              Mamut AI Assistant
            </CardTitle>
          </CardHeader>
          
          <CardContent className="p-0 flex flex-col h-full">
            <ScrollArea className="flex-1 px-4 pb-4">
              <div className="space-y-4">
                {messages.map((message) => (
                  <div
                    key={message.id}
                    className={`flex items-start gap-2 ${
                      message.isBot ? 'justify-start' : 'justify-end'
                    }`}
                  >
                    {message.isBot && (
                      <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center flex-shrink-0 mt-1">
                        <Bot className="h-3 w-3 text-primary-foreground" />
                      </div>
                    )}
                    <div
                      className={`max-w-[70%] p-3 rounded-lg text-sm ${
                        message.isBot
                          ? 'bg-muted text-muted-foreground'
                          : 'bg-primary text-primary-foreground'
                      }`}
                    >
                      {message.content}
                    </div>
                    {!message.isBot && (
                      <div className="w-6 h-6 rounded-full bg-secondary flex items-center justify-center flex-shrink-0 mt-1">
                        <User className="h-3 w-3 text-secondary-foreground" />
                      </div>
                    )}
                  </div>
                ))}
                
                {isTyping && (
                  <div className="flex items-start gap-2">
                    <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center flex-shrink-0 mt-1">
                      <Bot className="h-3 w-3 text-primary-foreground" />
                    </div>
                    <div className="bg-muted p-3 rounded-lg">
                      <div className="flex space-x-1">
                        <div className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce"></div>
                        <div className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                        <div className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
              <div ref={messagesEndRef} />
            </ScrollArea>

            <div className="p-4 border-t">
              <div className="flex gap-2">
                <Input
                  value={inputMessage}
                  onChange={(e) => setInputMessage(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Ask me anything..."
                  className="flex-1"
                />
                <Button onClick={handleSendMessage} size="sm">
                  <Send className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      )}
    </>
  );
};

export default Chatbot;