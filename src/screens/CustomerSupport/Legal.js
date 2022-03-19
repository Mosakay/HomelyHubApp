import {View, Text, Image, Switch, Button} from 'react-native';
import React, {useState} from 'react';
import {COLORS, FONTS, SIZES} from '../../constants/theme';
import {ScrollView, TextInput, TouchableOpacity} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/MaterialIcons';


const Legal = ({navigation, props}) => {

  return (
    <View
        style={{
            flex:1,
           
        }}
    >
        <ScrollView>
            <View
                style={{
                    width:SIZES.width -15,
                    justifyContent:'center',
                    color:COLORS.black,
                }}
            >
                <View
                    style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-around',
                    height: SIZES.padding * 3,
                    backgroundColor: COLORS.white,
                    borderBottomWidth: 1,
                    borderBottomColor: COLORS.gray3,
                    paddingRight: 105,
                    }}>
                    <TouchableOpacity
                    onPress={() => navigation.goBack()}
                    style={{marginTop: SIZES.padding}}>
                    <Icon name="arrow-back" size={25} />
                    </TouchableOpacity>
                    <Text
                    style={{...FONTS.h3, color: COLORS.black, marginTop: SIZES.padding}}>
                    Legal
                    </Text>
                </View>
                <View 
                    style={{
                        paddingHorizontal:SIZES.padding

                    }}
                >
                    <Text
                        style={{
                            fontSize:SIZES.h1,
                            color:COLORS.black,
                            textDecorationLine:'underline'
                        }}
                    >
                        Privacy Policy
                    </Text>
                    <Text
                        style={{
                            fontSize:SIZES.h2,
                            color:COLORS.black,
                            paddingBottom:SIZES.base
                        }}
                    >
                    Clauses:
                    </Text>
                    <View>
                        <Text
                            style={{
                                fontSize:SIZES.h3,
                                color:COLORS.black,
                                paddingBottom:SIZES.base
                            }}
                        >
                        •Information collection:
                        </Text>
                        <Text
                            style={{
                                fontSize:SIZES.h3,
                                color:COLORS.black,
                            }}
                        >
                        What personal or other data do we collect?
                        </Text>
                        <Text
                            style={{
                                paddingBottom:SIZES.base
                            }}
                        >
                            We collect and store the information which you give us via forms, sign up and setting change on our website or app such as your name, address, email address, phone number or when communicating with us by email, or in some other way. We also collect and store certain information such as your IP address to improve your experience by suggesting suitable products for you,based on previous purchases and searches. In order to handle payments and refunds, we gather your bank account and payment card information (payment information). We also collect, use, and share cookies data (such as button click data, optional values,pixels, and form field names) and, if already provided to us, contact data to interact with existing customers and potential customers who have visited our website or apps but have not yet signed up. We also collect the following categories of data: transaction data: your payment information and other details aboutthings you've purchased from our website or applications are examples of transaction data. usage data: which may include information about how you use our website or apps, and products; and marketing and communications data: which may include your preferences in receiving marketing from us and our third parties and your communication preferences.
                        </Text>               
                    </View>
                    <View>
                        <Text
                            style={{
                                fontSize:SIZES.h3,
                                color:COLORS.black,
                                paddingBottom:SIZES.base
                            }}                       
                        >
                        •Use of information:
                        </Text>
                        <Text
                            style={{
                                fontSize:SIZES.h3,
                                color:COLORS.black,
                                paddingBottom:SIZES.base
                            }}
                        >
                        How do we use your personal data?
                        </Text>
                        <Text>
                        We gather your name, contact information, delivery address, and order data to provide our services: for example, to supply the services you have requested, we collect your name, contact information, delivery address, and order details. We collect your credit or debit card information to enable us to collect payment from you. We may contact you about our services if necessary, such as to resolve any issues you may have with your order. We collect the information provided above as well as any extra information we may require handling your issue.
                        </Text>
                        <Text
                            style={{
                                paddingBottom:SIZES.base
                            }}  
                        >
                        When you visit or return to our website or apps, we may use your IP address and other customer behaviour data to recognise you. This enables us to measure anonymous traffic and usage patterns, as well as prevent or identify fraud and improve our service. We may share your information with third parties in other sectors if you have givenus your approval, so that they can notify you about items or services that may be of interest to you.
                        </Text>                    
                    </View>
                    <View>
                        <Text
                            style={{
                                fontSize:SIZES.h3,
                                color:COLORS.black,                          
                                paddingBottom:SIZES.base
                            
                            }}
                        >
                        •Third party discloser:
                        </Text>
                        <Text>
                        Occasionally, our website may include links to and from the websites of our partner networks, advertisers, and affiliates, as well as any other websites that may provide relevant information to our users. We provide these links to you as a courtesy, and the inclusion of any link does not mean that we endorse the website in question.
                        </Text>
                        <Text
                            style={{
                                paddingBottom:SIZES.base
                            }}  
                        >
                        In order to handle your orders and any potential refunds, we may share your payment information, including your email address, with banks and payment service providers such as PayPal and Sage Pay.
                        </Text>
                    </View>
                    <View>
                        <Text
                            style={{
                                fontSize:SIZES.h3,
                                color:COLORS.black,
                                paddingBottom:SIZES.base
                            }}
                        >
                        •Information protection:
                        </Text>
                        <Text
                            style={{
                                paddingBottom:SIZES.base
                            }}  
                        >
                        We shall use the legitimate basis of "contractual" under GDPR, which allows us to use contact and payment data to full fill requests.The lawful basis for using contact, survey, or consumer behaviour data for marketing purposes will be "consent" or "legitimate interest."
                        </Text>                    
                    </View>
                    <View>
                        <Text
                            style={{
                                fontSize:SIZES.h3,
                                color:COLORS.black,
                            }}
                        >
                        •Rights of users:
                        </Text>
                        <Text>You have the right to request copy of your data.You have the right to request deletion of your data. You have the option to opt out of marketing communications.
                        </Text>                    
                    </View>
                    <View>
                        <Text
                            style={{
                                fontSize:SIZES.h3,
                                color:COLORS.black,
                                paddingBottom:SIZES.base
                            
                            }}
                        >
                        •Cookies:
                        </Text>
                        <Text
                            style={{
                                paddingBottom:SIZES.base
                            }}  
                        >
                        Cookies are little text files that are used to identify your machine when you connect to a computer network. HTTP cookies are used to identify and improve your web browsing experience by allowing you to identify specifi cusers.There are necessary and optional cookies: Disabling optional cookies may result in certain areas of the site/app to become inaccessible. Necessary cookies: These cookies are required for the website tofunction properly. They frequently improve the website’s usability foryou by allowing you to navigate through many pages efficiently and simply without having to verify or reprocess every time you visit the site. Optional cookies: Analytical cookies: These cookies enable us to track visits and traffic sources to improve the functionality of our website and app. They assist us in determining popularity of pages, as well as observing how visitors navigate the site. If you do not allow these cookies, we will not be able to track when you visit our site or use our service, and we will be unable to monitor the site's or service’s performance.Targeting cookies: These cookies are used to provide content andadvertisements to users, as well as to gather information about your browsing habits and website usage in order to tailor advertisements to you based on your visits to this website. We may employ remarketing services to allow third parties to serve relevant and personalised advertisements to users via their networks. They may also allow you to sign into our services using your social media account or instantly share material across social media.
                        </Text>                    
                    </View>
                    {/* tearms and conditions */}
                    <View>
                        <Text
                            style={{
                                fontSize:SIZES.h2,
                                color:COLORS.black,
                                paddingBottom:SIZES.base
  
                            }}
                        >
                        Terms and conditions
                        </Text>
                        <Text
                            style={{
                                fontSize:SIZES.h3,
                                color:COLORS.black,
                                paddingBottom:SIZES.base
                            }}
                        >
                        These are the terms and conditions when applying for the homely hub app or via website.
                        </Text>
                        <Text
                            style={{
                                fontSize:SIZES.h3,
                                color:COLORS.black,
                                paddingBottom:SIZES.base
                            }}
                        >
                        Registration  
                        </Text>
                        <Text
                            style={{
                                paddingBottom:SIZES.base
                            }}                          
                        >
                        When you signing up to the Homely hub website, these are the terms and conditions which will apply when making an order:
                        </Text>
                        <Text
                            style={{
                                paddingBottom:SIZES.base
                            }}                          
                        >
                        <Text
                            style={{
                                fontSize:SIZES.h3,
                                color:COLORS.black,
                                paddingBottom:SIZES.base
                            }}
                        >.Your address: </Text>we will need your address and this will include your postcode with a billing address associated with the payment card.
                        </Text>
                        <Text>
                        <Text
                            style={{
                                fontSize:SIZES.h3,
                                color:COLORS.black,
                                paddingBottom:SIZES.base
                            }}
                        >.Home number:</Text>we will need your home number so weare able to contact you after youhave placed an order.
                        </Text>
                        <Text
                            style={{
                                paddingBottom:SIZES.base
                            }}                        
                        >
                        <Text
                            style={{
                                fontSize:SIZES.h3,
                                color:COLORS.black,
                                paddingBottom:SIZES.base
                            }}
                        >.Your email address: </Text>we will need your email address,so we are able to supply you with important information, such as changes to the website, or any updates that have been made tothe website. There will be two steps for your order confirmation. The first step will be on screen immediately after the payment has been received for your order, the second will be by email tobe able to confirm your full details.
                        </Text>
                        <Text
                            style={{
                                fontSize:SIZES.h3,
                                color:COLORS.black,
                                paddingBottom:SIZES.base
                            }}
                        >Costumer responsibility</Text>
                        <Text
                            style={{
                                paddingBottom:SIZES.base
                            }}                        
                        >
                        These terms and conditions show that the customer should take responsibility for maintaining their account details including their password to their log in. The customer should accept there responsibility of the activities that occur in their account, and the customer should take necessary steps to ensure their account is safe. When placing an order the customer will receive the receipt via email and will get a notification when order is dispatched and on it’s way.
                        </Text>
                        <Text
                            style={{
                                fontSize:SIZES.h3,
                                color:COLORS.black,
                                paddingBottom:SIZES.base
                            }}
                        >
                        Conversations via app
                        </Text>
                        <Text
                            style={{
                                paddingBottom:SIZES.base
                            }}                        
                        >
                        When ordered through the homely hub app you are able to have a conversation to theperson delivering your food through the homely hub app.
                        </Text>
                        <Text
                            style={{
                                fontSize:SIZES.h3,
                                color:COLORS.black,
                                paddingBottom:SIZES.base
                            }}
                        >
                        Location
                        </Text>
                        <Text
                            style={{
                                paddingBottom:SIZES.base
                            }}                        
                        >
                        When you launch the app we will ask for your current location so we are able to see your current location for delivery if you are on the move.
                        </Text>
                        <Text
                            style={{
                                fontSize:SIZES.h3,
                                color:COLORS.black,
                                paddingBottom:SIZES.base
                            }}
                        >
                        Product prices
                        </Text>
                        <Text
                            style={{
                                paddingBottom:SIZES.base
                            }}                        
                        >
                        The product will be the same price that is shown to you in the website at the time you have placed an order.
                        </Text>
                        <Text
                            style={{
                                paddingBottom:SIZES.base
                            }}                        
                        >
                        <Text
                            style={{
                                fontSize:SIZES.h3,
                                color:COLORS.black,
                                paddingBottom:SIZES.base
                            }}
                        >Vouchers: </Text>vouchers won’t be able to exchange for cash, but they are able to be used towards the purchase and order that is a higher price that is face value upon the payment of the difference. The vouchers are only valid for the amount that is shown.
                        </Text>
                        <Text
                            style={{
                                fontSize:SIZES.h3,
                                color:COLORS.black,
                                paddingBottom:SIZES.base
                            }}
                        >
                        Cancelling an order
                        </Text>
                        <Text
                            style={{
                                paddingBottom:SIZES.base
                            }}                        
                        >
                        Once you have made an order and wish to cancel it, you will be able to cancel it and we will refund you after the cancellation. If you are unhappy with the service you are able to contactus via email or phone number.
                        </Text>
                        <Text
                            style={{
                                fontSize:SIZES.h3,
                                color:COLORS.black,
                                paddingBottom:SIZES.base
                            }}
                        >
                        Payment method
                        </Text>
                        <Text
                            style={{
                                paddingBottom:SIZES.base
                            }}                        
                        >
                        When using our homely hub website there are different ways you are able to make apayment.
                        </Text>
                        <Text
                            style={{
                                marginBottom:SIZES.base
                            }}                        
                        >
                        <Text
                            style={{
                                fontSize:SIZES.h3,
                                color:COLORS.black,
                                paddingBottom:SIZES.base
                            }}

                        >Credit or debit card:</Text> when you have picked an order you are able to pay via your credit or debit card.
                        </Text>    
                    </View>
                </View>                
            </View>

        </ScrollView>
    </View>   
  );
};


export default Legal;
