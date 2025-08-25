import React, { useState, useEffect, useRef } from 'react';

const AIChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [inputMessage, setInputMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [userInfo, setUserInfo] = useState({
    name: '',
    email: '',
    phone: '',
    zipCode: '',
    tvSize: '',
    tvCount: '',
    services: [],
    wallType: '',
    additionalInfo: '',
    hasProvidedInfo: false,
    isQualified: false,
    estimatedCost: 0
  });
  const messagesEndRef = useRef(null);
  const chatInputRef = useRef(null);

  // AI Assistant personality and knowledge base
  const aiPersonality = {
    name: "Alex",
    role: "AV Installation Specialist",
    personality: "professional, approachable, clear",
    greeting: "Hi! I'm Alex from Dapper AV. I'm here to help you with any questions about TV mounting, audio systems, or network setups. We deliver worry-free, white-glove installation with everything included up front. What can I help you with today?",
  };

  const knowledgeBase = {
    pricing: {
      tvMounting65: "TV mounting for TVs up to 65\" is $200 flat rate per TV. This includes a standard tilting bracket, wires concealed in-wall, and one HDMI cable. Price may vary depending on on-site conditions.",
      tvMounting75: "TVs 75\" and above are $249 each, including bracket, concealment, and HDMI cable.",
      soundbar: "Soundbar installation is $150, or $100 if bundled with a TV installation.",
      haulAway: "We haul away most flat screen TVs for free. Exceptions are older tube or rear projection TVs over 80 lbs which require extra handling.",
      remotes: "Standard setup includes programming a factory remote to control up to 2 devices. Advanced universal remotes like Logitech Harmony are $100 for up to 6 devices.",
      travel: "We serve Southwest Houston locally, with a $50 travel fee for locations 30+ miles from Rosenberg, TX.",
      multiRoom: "Multi-room and advanced audio systems require consultation since scope varies significantly.",
      network: "All network projects require consultation due to layout, scope, and equipment needs."
    },
    services: {
      tvBrands: "We work with all major TV brands including Samsung, LG, Sony, and others.",
      audioBrands: "We install audio from top brands like Sonos, Denon, and Yamaha.",
      networkBrands: "For networking, we use professional equipment from Ubiquiti, Cisco, and Netgear.",
      mounts: "Standard tilting bracket is included. We also offer full motion mounts, ceiling mounts, and other specialty mounting options.",
      warranty: "All our work comes with a 1-year workmanship warranty, and we honor all manufacturer warranties.",
      coverage: "We handle everything from simple living rooms to advanced commercial setups - restaurants, offices, retail spaces with multiple TVs and distributed audio."
    },
    timeframes: {
      tvMounting: "Standard TV installation takes 1-2 hours per TV.",
      soundbar: "Soundbar installation typically takes 1 hour.",
      consultation: "We typically respond within 1-2 business days to confirm scheduling.",
      network: "Network and larger audio projects get custom timelines provided during consultation."
    },
    processInfo: {
      contact: "The best way to get started is through our website contact form where our team reviews requests and provides estimates.",
      qualification: "We'll need to know your TV size, how many units, whether you want soundbar or full audio, and your zip code to confirm any travel charges.",
      booking: "Once you submit the form, our team reviews it, provides an estimate and confirmation, then schedules your installation."
    }
  };

  useEffect(() => {
    if (isOpen && messages.length === 0) {
      // Initial greeting
      setTimeout(() => {
        addAIMessage(aiPersonality.greeting);
      }, 500);
    }
  }, [isOpen]);

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    if (isOpen && chatInputRef.current) {
      chatInputRef.current.focus();
    }
  }, [isOpen, isTyping]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const addAIMessage = (text, delay = 1000) => {
    setIsTyping(true);
    setTimeout(() => {
      setMessages(prev => [...prev, {
        id: Date.now(),
        text,
        isUser: false,
        timestamp: new Date()
      }]);
      setIsTyping(false);
    }, delay);
  };

  const addUserMessage = (text) => {
    setMessages(prev => [...prev, {
      id: Date.now(),
      text,
      isUser: true,
      timestamp: new Date()
    }]);
  };

  const generateAIResponse = (userMessage) => {
    const message = userMessage.toLowerCase();
    let updatedUserInfo = { ...userInfo };
    
    // Extract TV size from message
    const sizeMatch = message.match(/(\d+)\s*(?:inch|["']|")/);
    if (sizeMatch && !userInfo.tvSize) {
      updatedUserInfo.tvSize = sizeMatch[1] + '"';
      setUserInfo(updatedUserInfo);
    }

    // Extract zip code
    const zipMatch = message.match(/(\d{5})/);
    if (zipMatch && !userInfo.zipCode) {
      updatedUserInfo.zipCode = zipMatch[1];
      setUserInfo(updatedUserInfo);
    }

    // Extract TV count
    const countMatch = message.match(/(\d+)\s*(?:tv|television|screen)/i);
    if (countMatch && !userInfo.tvCount) {
      updatedUserInfo.tvCount = countMatch[1];
      setUserInfo(updatedUserInfo);
    }

    // Service detection
    let detectedServices = [];
    if (message.includes('tv') || message.includes('mount')) detectedServices.push('TV Mounting');
    if (message.includes('soundbar') || message.includes('sound bar')) detectedServices.push('Soundbar Installation');
    if (message.includes('audio') || message.includes('speaker')) detectedServices.push('Audio System');
    if (message.includes('network') || message.includes('wifi')) detectedServices.push('Network Upgrade');
    
    if (detectedServices.length > 0) {
      updatedUserInfo.services = [...new Set([...updatedUserInfo.services, ...detectedServices])];
      setUserInfo(updatedUserInfo);
    }

    // Calculate estimated cost based on collected info
    let estimatedCost = 0;
    if (updatedUserInfo.services.includes('TV Mounting')) {
      const tvCount = parseInt(updatedUserInfo.tvCount) || 1;
      const tvSize = parseInt(updatedUserInfo.tvSize) || 65;
      const costPerTV = tvSize >= 75 ? 249 : 200;
      estimatedCost += costPerTV * tvCount;
    }
    if (updatedUserInfo.services.includes('Soundbar Installation')) {
      const soundbarCost = updatedUserInfo.services.includes('TV Mounting') ? 100 : 150;
      estimatedCost += soundbarCost;
    }
    updatedUserInfo.estimatedCost = estimatedCost;
    setUserInfo(updatedUserInfo);

    // Greeting responses
    if (message.includes('hi') || message.includes('hello') || message.includes('hey')) {
      return `Hey there! ${updatedUserInfo.name ? updatedUserInfo.name + ', g' : 'G'}reat to meet you! I'm Alex from Dapper AV. I'll ask you a few quick questions so I can give you an accurate estimate and get you scheduled. What brings you here today - TV mounting, soundbar installation, or something else?`;
    }

    // Start qualification flow
    if (!updatedUserInfo.services.length) {
      if (message.includes('tv') || message.includes('mount')) {
        return "Perfect! TV mounting is our specialty. What size TV are we working with? And how many TVs do you need mounted?";
      }
      if (message.includes('soundbar') || message.includes('sound bar')) {
        return "Great choice! Soundbar installation makes a huge difference. Are you also getting a TV mounted, or just the soundbar?";
      }
      return "I'd love to help you get set up! What type of installation are you looking for - TV mounting, soundbar, multi-room audio, or network upgrade?";
    }

    // Collect TV size if missing
    if (updatedUserInfo.services.includes('TV Mounting') && !updatedUserInfo.tvSize) {
      return "What size TV are we mounting? This helps me give you accurate pricing - we charge $200 for TVs up to 65\" and $249 for 75\" and larger.";
    }

    // Collect TV count if missing
    if (updatedUserInfo.services.includes('TV Mounting') && !updatedUserInfo.tvCount) {
      return "How many TVs do you need mounted? Just one, or are we doing multiple rooms?";
    }

    // Collect location for travel fees
    if (!updatedUserInfo.zipCode) {
      return "What's your zip code? This helps me check if there are any travel fees (we charge $50 for locations 30+ miles from Rosenberg, TX).";
    }

    // Collect contact info
    if (!updatedUserInfo.name) {
      return "Great! I'm getting a good picture of your project. What's your name so I can personalize this for you?";
    }

    if (!updatedUserInfo.email && !updatedUserInfo.phone) {
      return `Thanks ${updatedUserInfo.name}! What's the best way to reach you - email or phone number? This is so our team can contact you to schedule the installation.`;
    }

    // Present estimate and move to scheduling
    if (updatedUserInfo.name && (updatedUserInfo.email || updatedUserInfo.phone) && updatedUserInfo.estimatedCost > 0 && !updatedUserInfo.isQualified) {
      updatedUserInfo.isQualified = true;
      setUserInfo(updatedUserInfo);
      
      let estimate = `Perfect! Here's what I have for you:\n\n`;
      estimate += `📋 **${updatedUserInfo.name}'s Project Summary:**\n`;
      estimate += `• Services: ${updatedUserInfo.services.join(', ')}\n`;
      if (updatedUserInfo.tvSize) estimate += `• TV Size: ${updatedUserInfo.tvSize}\n`;
      if (updatedUserInfo.tvCount) estimate += `• Number of TVs: ${updatedUserInfo.tvCount}\n`;
      estimate += `• Location: ${updatedUserInfo.zipCode}\n`;
      estimate += `• Estimated Cost: $${updatedUserInfo.estimatedCost}\n\n`;
      estimate += `This includes everything - brackets, cable concealment, and professional installation. Ready to schedule? I can pre-fill our contact form with all this info so you just need to click "Schedule Installation"!`;
      
      return estimate;
    }

    // Handle scheduling request
    if ((message.includes('schedule') || message.includes('book') || message.includes('ready') || message.includes('yes')) && updatedUserInfo.isQualified) {
      // Trigger form pre-fill
      setTimeout(() => {
        prefillContactForm(updatedUserInfo);
      }, 1000);
      
      return `Awesome! I'm pre-filling the contact form with all your details right now. Just scroll down to the contact section and click "Schedule Installation" - everything will be ready to go! Our team will reach out within 1-2 business days to confirm your appointment.`;
    }

    // Handle pricing questions with current info
    if (message.includes('price') || message.includes('cost') || message.includes('how much')) {
      if (updatedUserInfo.estimatedCost > 0) {
        return `Based on what we've discussed, your estimated cost is $${updatedUserInfo.estimatedCost}. This includes brackets, cable concealment, and professional installation. Would you like to schedule this installation?`;
      }
      return "I'd be happy to give you pricing! What size TV are we mounting, and how many?";
    }

    // Name capture
    if (message.includes('my name is') || message.includes("i'm ")) {
      const nameMatch = message.match(/(?:my name is|i'm|im)\s+([a-zA-Z]+)/i);
      if (nameMatch) {
        const name = nameMatch[1];
        updatedUserInfo.name = name;
        setUserInfo(updatedUserInfo);
        return `Nice to meet you, ${name}! ${!updatedUserInfo.email && !updatedUserInfo.phone ? "What's the best way to reach you - email or phone?" : "Thanks for all the info! Ready to get this scheduled?"}`;
      }
    }

    // Contact info capture
    if (message.includes('@') || message.match(/\d{3}[-.]?\d{3}[-.]?\d{4}/)) {
      const email = message.match(/\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}\b/);
      const phone = message.match(/(\d{3}[-.]?\d{3}[-.]?\d{4})/);
      
      let response = "Perfect! ";
      
      if (email) {
        updatedUserInfo.email = email[0];
        response += `I've got your email as ${email[0]}. `;
      }
      if (phone) {
        updatedUserInfo.phone = phone[0];
        response += `And your phone number as ${phone[0]}. `;
      }
      
      updatedUserInfo.hasProvidedInfo = true;
      setUserInfo(updatedUserInfo);
      
      // Check if we can provide estimate now
      if (updatedUserInfo.estimatedCost > 0) {
        response += `\n\nBased on everything we've discussed, your estimated cost is $${updatedUserInfo.estimatedCost}. Ready to schedule your installation?`;
      }
      
      return response;
    }

    // Wall type questions
    if (message.includes('drywall') || message.includes('brick') || message.includes('stone') || message.includes('concrete')) {
      updatedUserInfo.wallType = message.includes('brick') ? 'brick' : message.includes('stone') ? 'stone' : message.includes('concrete') ? 'concrete' : 'drywall';
      setUserInfo(updatedUserInfo);
      return "Good to know about the wall type. That helps with the installation planning. Do you have any other questions, or are you ready to schedule?";
    }

    // Default responses based on qualification state
    if (!updatedUserInfo.isQualified) {
      const missing = [];
      if (!updatedUserInfo.services.length) missing.push("what service you need");
      if (updatedUserInfo.services.includes('TV Mounting') && !updatedUserInfo.tvSize) missing.push("TV size");
      if (updatedUserInfo.services.includes('TV Mounting') && !updatedUserInfo.tvCount) missing.push("number of TVs");
      if (!updatedUserInfo.zipCode) missing.push("zip code");
      if (!updatedUserInfo.name) missing.push("your name");
      if (!updatedUserInfo.email && !updatedUserInfo.phone) missing.push("contact info");
      
      if (missing.length > 0) {
        return `I just need ${missing[0]} to give you an accurate estimate. ${missing[0] === "what service you need" ? "Are you looking for TV mounting, soundbar installation, or something else?" : ""}`;
      }
    }

    const responses = [
      "I want to make sure I get you an accurate estimate! What else can you tell me about your project?",
      "Almost there! Any other details about what you're looking to have installed?",
      "Great info! Anything else I should know for your installation?"
    ];

    return responses[Math.floor(Math.random() * responses.length)];
  };

  // Function to pre-fill contact form
  const prefillContactForm = (info) => {
    // Scroll to contact section
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }

    // Use event-based communication with ContactSection
    setTimeout(() => {
      const event = new CustomEvent('chatPrefillForm', {
        detail: {
          name: info.name,
          email: info.email,
          phone: info.phone,
          location: info.zipCode,
          message: `AI Chat Summary:\n\nServices Requested: ${info.services.join(', ')}\n${info.tvSize ? `TV Size: ${info.tvSize}\n` : ''}${info.tvCount ? `Number of TVs: ${info.tvCount}\n` : ''}Location: ${info.zipCode}\n${info.wallType ? `Wall Type: ${info.wallType}\n` : ''}Estimated Cost: $${info.estimatedCost}\n\nCustomer is ready to schedule installation. Please contact to confirm appointment details.`
        }
      });
      window.dispatchEvent(event);
    }, 500);
  };

  const handleSendMessage = () => {
    if (inputMessage.trim()) {
      addUserMessage(inputMessage);
      const response = generateAIResponse(inputMessage);
      addAIMessage(response, Math.random() * 1000 + 800); // Variable typing delay
      setInputMessage('');
      
      // Analytics tracking
      console.log('[Analytics] Chat message sent:', inputMessage.substring(0, 50));
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const quickActions = [
    { text: "Mount a TV", action: "I need to mount a 65 inch TV" },
    { text: "Install Soundbar", action: "I need a soundbar installed" },
    { text: "Get Quote", action: "I want to get a quote for my project" },
    { text: "Multiple TVs", action: "I need to mount multiple TVs" }
  ];

  const handleQuickAction = (action) => {
    setInputMessage(action);
    setTimeout(() => handleSendMessage(), 100);
  };

  if (!isOpen) {
    return (
      <div style={{
        position: 'fixed',
        bottom: '2rem',
        right: '2rem',
        zIndex: 1000
      }}>
        <button
          onClick={() => setIsOpen(true)}
          style={{
            width: 70,
            height: 70,
            borderRadius: '50%',
            background: 'linear-gradient(135deg, #FFD700, #FFC300)',
            border: 'none',
            boxShadow: '0 8px 25px rgba(255,215,0,0.4)',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '1.8rem',
            transition: 'all 0.3s ease',
            animation: 'pulse 2s infinite'
          }}
          onMouseOver={(e) => {
            e.target.style.transform = 'scale(1.1)';
            e.target.style.boxShadow = '0 12px 30px rgba(255,215,0,0.5)';
          }}
          onMouseOut={(e) => {
            e.target.style.transform = 'scale(1)';
            e.target.style.boxShadow = '0 8px 25px rgba(255,215,0,0.4)';
          }}
        >
          💬
        </button>
        
        {/* Floating message bubble */}
        <div style={{
          position: 'absolute',
          bottom: '80px',
          right: '0',
          background: '#fff',
          padding: '0.75rem 1rem',
          borderRadius: '12px',
          boxShadow: '0 8px 25px rgba(0,0,0,0.15)',
          fontSize: '0.9rem',
          fontWeight: 600,
          color: '#333',
          whiteSpace: 'nowrap',
          opacity: 0.9,
          animation: 'fadeInOut 4s infinite'
        }}>
          Hi! Need help with AV installation?
        </div>

        <style>{`
          @keyframes pulse {
            0% { transform: scale(1); }
            50% { transform: scale(1.05); }
            100% { transform: scale(1); }
          }
          @keyframes fadeInOut {
            0%, 100% { opacity: 0; }
            25%, 75% { opacity: 0.9; }
          }
        `}</style>
      </div>
    );
  }

  return (
    <div style={{
      position: 'fixed',
      bottom: '2rem',
      right: '2rem',
      width: '400px',
      height: '600px',
      background: '#fff',
      borderRadius: '20px',
      boxShadow: '0 20px 60px rgba(0,0,0,0.2)',
      display: 'flex',
      flexDirection: 'column',
      zIndex: 1000,
      overflow: 'hidden',
      border: '1px solid rgba(0,0,0,0.1)'
    }}>
      {/* Header */}
      <div style={{
        background: 'linear-gradient(135deg, #FFD700, #FFC300)',
        padding: '1rem 1.25rem',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          <div style={{
            width: 40,
            height: 40,
            borderRadius: '50%',
            background: 'rgba(0,0,0,0.1)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '1.2rem'
          }}>
            🤖
          </div>
          <div>
            <div style={{ fontWeight: 900, color: '#000', fontSize: '1.1rem' }}>
              {aiPersonality.name}
            </div>
            <div style={{ fontSize: '0.8rem', color: '#333', opacity: 0.8 }}>
              {aiPersonality.role} • Online
            </div>
          </div>
        </div>
        <button
          onClick={() => setIsOpen(false)}
          style={{
            background: 'none',
            border: 'none',
            fontSize: '1.5rem',
            cursor: 'pointer',
            color: '#000',
            opacity: 0.7,
            padding: 0,
            width: 30,
            height: 30,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: '50%'
          }}
          onMouseOver={(e) => e.target.style.opacity = '1'}
          onMouseOut={(e) => e.target.style.opacity = '0.7'}
        >
          ✕
        </button>
      </div>

      {/* Messages */}
      <div style={{
        flex: 1,
        padding: '1rem',
        overflowY: 'auto',
        display: 'flex',
        flexDirection: 'column',
        gap: '1rem'
      }}>
        {messages.map(message => (
          <div key={message.id} style={{
            display: 'flex',
            justifyContent: message.isUser ? 'flex-end' : 'flex-start'
          }}>
            <div style={{
              maxWidth: '80%',
              padding: '0.75rem 1rem',
              borderRadius: message.isUser ? '18px 18px 4px 18px' : '18px 18px 18px 4px',
              background: message.isUser 
                ? 'linear-gradient(135deg, #FFD700, #FFC300)'
                : '#f1f3f4',
              color: message.isUser ? '#000' : '#333',
              fontSize: '0.95rem',
              lineHeight: 1.4,
              fontWeight: message.isUser ? 600 : 400
            }}>
              {message.text}
            </div>
          </div>
        ))}
        
        {isTyping && (
          <div style={{
            display: 'flex',
            justifyContent: 'flex-start'
          }}>
            <div style={{
              padding: '0.75rem 1rem',
              borderRadius: '18px 18px 18px 4px',
              background: '#f1f3f4',
              color: '#666',
              fontSize: '0.95rem'
            }}>
              <div style={{ display: 'flex', gap: '4px', alignItems: 'center' }}>
                <div className="typing-dot"></div>
                <div className="typing-dot"></div>
                <div className="typing-dot"></div>
                <span style={{ marginLeft: '8px' }}>Alex is typing...</span>
              </div>
            </div>
          </div>
        )}
        
        <div ref={messagesEndRef} />
        
        {/* Progress Indicator */}
        {userInfo.services.length > 0 && (
          <div style={{
            background: 'rgba(255,215,0,0.1)',
            border: '1px solid rgba(255,215,0,0.3)',
            borderRadius: '12px',
            padding: '1rem',
            marginTop: '1rem'
          }}>
            <div style={{ fontSize: '0.9rem', fontWeight: 600, marginBottom: '0.5rem', color: '#333' }}>
              📋 Project Details
            </div>
            <div style={{ fontSize: '0.8rem', color: '#666', lineHeight: 1.4 }}>
              {userInfo.services.length > 0 && <div>✅ Services: {userInfo.services.join(', ')}</div>}
              {userInfo.tvSize && <div>✅ TV Size: {userInfo.tvSize}</div>}
              {userInfo.tvCount && <div>✅ TV Count: {userInfo.tvCount}</div>}
              {userInfo.zipCode && <div>✅ Location: {userInfo.zipCode}</div>}
              {userInfo.name && <div>✅ Name: {userInfo.name}</div>}
              {(userInfo.email || userInfo.phone) && <div>✅ Contact: {userInfo.email || userInfo.phone}</div>}
              {userInfo.estimatedCost > 0 && (
                <div style={{ marginTop: '0.5rem', fontWeight: 600, color: '#000' }}>
                  💰 Estimated Cost: ${userInfo.estimatedCost}
                </div>
              )}
            </div>
            
            {/* Schedule Installation Button */}
            {userInfo.isQualified && (
              <button
                onClick={() => {
                  prefillContactForm(userInfo);
                  addAIMessage("Perfect! I'm pre-filling the contact form now. Just scroll down and click 'Schedule Installation'!");
                }}
                style={{
                  width: '100%',
                  marginTop: '0.75rem',
                  background: 'linear-gradient(135deg, #FFD700, #FFC300)',
                  border: 'none',
                  borderRadius: '8px',
                  padding: '0.75rem',
                  fontWeight: 700,
                  fontSize: '0.9rem',
                  cursor: 'pointer',
                  color: '#000',
                  transition: 'all 0.2s ease'
                }}
                onMouseOver={(e) => {
                  e.target.style.transform = 'translateY(-1px)';
                  e.target.style.boxShadow = '0 4px 12px rgba(255,215,0,0.4)';
                }}
                onMouseOut={(e) => {
                  e.target.style.transform = 'translateY(0)';
                  e.target.style.boxShadow = 'none';
                }}
              >
                🗓️ Schedule Installation
              </button>
            )}
          </div>
        )}
      </div>

      {/* Quick Actions */}
      {messages.length <= 2 && (
        <div style={{
          padding: '0 1rem',
          display: 'flex',
          flexWrap: 'wrap',
          gap: '0.5rem'
        }}>
          {quickActions.map((action, index) => (
            <button
              key={index}
              onClick={() => handleQuickAction(action.action)}
              style={{
                background: 'rgba(255,215,0,0.1)',
                border: '1px solid rgba(255,215,0,0.3)',
                borderRadius: '16px',
                padding: '0.5rem 0.75rem',
                fontSize: '0.8rem',
                fontWeight: 600,
                cursor: 'pointer',
                color: '#333',
                transition: 'all 0.2s ease'
              }}
              onMouseOver={(e) => {
                e.target.style.background = 'rgba(255,215,0,0.2)';
                e.target.style.borderColor = 'rgba(255,215,0,0.5)';
              }}
              onMouseOut={(e) => {
                e.target.style.background = 'rgba(255,215,0,0.1)';
                e.target.style.borderColor = 'rgba(255,215,0,0.3)';
              }}
            >
              {action.text}
            </button>
          ))}
        </div>
      )}

      {/* Input */}
      <div style={{
        padding: '1rem',
        borderTop: '1px solid #e9ecef'
      }}>
        <div style={{
          display: 'flex',
          gap: '0.5rem',
          alignItems: 'flex-end'
        }}>
          <textarea
            ref={chatInputRef}
            value={inputMessage}
            onChange={(e) => setInputMessage(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Type your message..."
            style={{
              flex: 1,
              border: '1px solid #ddd',
              borderRadius: '12px',
              padding: '0.75rem',
              fontSize: '0.95rem',
              outline: 'none',
              resize: 'none',
              minHeight: '20px',
              maxHeight: '80px',
              fontFamily: 'inherit'
            }}
            rows={1}
          />
          <button
            onClick={handleSendMessage}
            disabled={!inputMessage.trim()}
            style={{
              background: inputMessage.trim() 
                ? 'linear-gradient(135deg, #FFD700, #FFC300)'
                : '#ddd',
              border: 'none',
              borderRadius: '12px',
              padding: '0.75rem',
              cursor: inputMessage.trim() ? 'pointer' : 'not-allowed',
              fontSize: '1.2rem',
              transition: 'all 0.2s ease'
            }}
          >
            📤
          </button>
        </div>
      </div>

      <style>{`
        .typing-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: #999;
          animation: typing 1.4s ease-in-out infinite;
        }
        .typing-dot:nth-child(2) {
          animation-delay: 0.2s;
        }
        .typing-dot:nth-child(3) {
          animation-delay: 0.4s;
        }
        @keyframes typing {
          0%, 60%, 100% {
            transform: translateY(0);
            opacity: 0.4;
          }
          30% {
            transform: translateY(-10px);
            opacity: 1;
          }
        }
      `}</style>
    </div>
  );
};

export default AIChatWidget;
