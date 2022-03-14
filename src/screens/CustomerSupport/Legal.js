import {View, Text, Image, Switch, Button} from 'react-native';
import React, {useState} from 'react';
import {COLORS, FONTS, SIZES} from '../../constants/theme';
import {ScrollView, TextInput, TouchableOpacity} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/MaterialIcons';


const Legal = ({navigation, props}) => {

  return (
    <View
        style={{
            flex:1
        }}
    >
        <ScrollView>
            <View
                style={{
                    width:SIZES.width -15,
                    justifyContent:'center'
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
                <View>
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
                        }}
                    >
                    Clauses:
                    </Text>
                    <View>
                        <Text
                            style={{
                                fontSize:SIZES.h3,
                                color:COLORS.black,
                            }}
                        >
                        •Information collection:
                        </Text>
                        <Text>
                        What personal or other data do we collect?
                        </Text>
                        <Text>
                            We collect and store the information which you give us via forms,sign up and setting change on our website or app such as yourname, address, email address, phone number or whencommunicating with us by email, or in some other way.We alsocollect and store certain information such as your IP address toimprove your experience by suggesting suitable products for you,based on previous purchases and searches. In order to handlepayments and refunds, we gather your bank account and paymentcard information (payment information). We also collect, use, andshare cookies data (such as button click data, optional values,pixels, and form field names) and, if already provided to us, contactdata to interact with existing customers and potential customerswho have visited our website or apps but have not yet signed up.We also collect the following categories of data: transaction data:your payment information and other details aboutthingsyou'vepurchased from our website or applications are examples oftransaction data.usage data: which may include information about how you useourwebsite or apps, and products; andmarketing and communications data: which may include yourpreferences in receiving marketing from us and our third partiesand your communication preferences.
                        </Text>               
                    </View>
                    <View>
                        <Text
                            style={{
                                fontSize:SIZES.h3,
                                color:COLORS.black,
                            }}                    
                        >
                        •Use of information:
                        </Text>
                        <Text>
                        How do we use your personal data?
                        </Text>
                        <Text>
                        We gather your name, contact information, delivery address, andorder data to provide our services: for example, to supply theservices you have requested, we collect your name, contactinformation, delivery address, and order details. We collect your credit or debit card information to enable us to collect payment from you. We may contact you about our services if necessary, such as toresolve any issues you may have with your order. We collect theinformation provided above as well as any extra information we mayrequire handling your issue.
                        </Text>
                        <Text>
                        When you visit or return to our website or apps, we may use your IPaddress and other customer behaviour data to recognise you. This enables us to measure anonymous traffic and usage patterns, as well asprevent or identify fraud and improve our service. We may shareyour information with third parties in other sectorsif you have givenus your approval, so that they can notify you about items or servicesthat may be of interest to you.
                        </Text>                    
                    </View>
                    <View>
                        <Text
                            style={{
                                fontSize:SIZES.h3,
                                color:COLORS.black,
                            }}
                        >
                        •Third party discloser:
                        </Text>
                        <Text>
                        Occasionally, our website may include links to and from thewebsites of our partner networks, advertisers, and affiliates, as wellas any other websites that may provide relevant information to ourusers. We provide these links to you as a courtesy, and theinclusion of any link does not mean that we endorse the websitein question.
                        </Text>
                        <Text>
                        In order to handle your orders and any potential refunds, we may share your payment information, including your email address, with banks and payment service providers such as PayPal and Sage Pay.
                        </Text>
                    </View>
                    <View>
                        <Text
                            style={{
                                fontSize:SIZES.h3,
                                color:COLORS.black,
                            }}
                        >
                        •Information protection:
                        </Text>
                        <Text>
                        We shall use the legitimate basis of "contractual" under GDPR,which allows us to use contact and payment data to fulfil requests.The lawful basis for using contact, survey, or consumer behaviourdata for marketing purposes will be "consent" or "legitimateinterest."
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
                            }}
                        >
                        •Cookies:
                        </Text>
                        <Text>
                        Cookies are little text files that are used to identify your machinewhen you connect to a computer network.HTTP cookies are used to identify and improve yourweb browsing experience by allowing you to identifyspecificusers.There are necessary and optional cookies:Disabling optional cookies may result in certain areas of the site/app to become inaccessible. Necessary cookies: These cookies are required for the website tofunction properly. They frequently improve the website’s usability foryou by allowing you to navigate through many pages efficiently andsimply without having to verify or reprocess every time you visit thesite. Optional cookies:Analytical cookies: These cookies enable us to track visits and trafficsources to improve the functionality of our website and app. Theyassist us in determining popularity of pages, as well as observinghow visitors navigate the site. If you do not allow these cookies, wewill not be able totrack when you visit our site or use our service, and we will beunable to monitor the site's or service’s performance.Targetingcookies: These cookies are used to provide content andadvertisements to users, as well as to gather information aboutyour browsing habits and website usage in order to tailoradvertisements to you based on your visits to this website. Wemay employ remarketing services to allow third parties to serverelevant and personalised advertisements to users via theirnetworks. They may also allow you to sign into our services usingyour social media account or instantly share material acrosssocial media.
                        </Text>                    
                    </View>
                    {/* tearms and conditions */}
                    <View>
                        <Text>
                        Terms and conditions
                        </Text>
                        <Text>
                        These are the terms and conditions when applying for the homely hub app or via website.
                        </Text>
                        <Text>
                        Registration  
                        </Text>
                        <Text>
                        When you signing up to the Homely hub website, these are the terms and conditions whichwill apply when making an order:
                        </Text>
                        <Text>
                        .Your address:we will need your address and thiswill include your postcode with a billingaddress associated with the payment card.
                        </Text>
                        <Text>
                        .Home number:we will need your home number so weare able to contact you after youhave placed an order.
                        </Text>
                        <Text>
                        .Your email address:we will need your email address,so we are able to supply you withimportant information, such as changes to the website, or any updates that have been made tothe website. There will be two steps for your order confirmation. The first step will be on screenimmediately after the payment has been received for your order, the second will be by email tobe able to confirm your full details.
                        </Text>
                        <Text>Costumer responsibility</Text>
                        <Text>
                        These terms and conditions show that the customer should take responsibility for maintainingtheir account details including their password to their log in. The customer should accept theresponsibility of the activities that occur in their account, and the customer should takenecessary steps to ensure their account is safe. When placing an order the customer willreceive the receipt via email and will get a notification when order is dispatched and on it’s way.
                        </Text>
                        <Text>
                        Conversations via app
                        </Text>
                        <Text>
                        When ordered through the homely hub app you are able to have a conversation to theperson delivering your food through the homely hub app.
                        </Text>
                        <Text>
                        Location
                        </Text>
                        <Text>
                        When you launch the app we will ask for your current location so we are able to see yourcurrent location for delivery if you are on the move.
                        </Text>
                        <Text>
                        Product prices
                        </Text>
                        <Text>
                        The product will be the same price that is shown to you in the website at the time you haveplaced an order.
                        </Text>
                        <Text>
                        Vouchers:vouchers won’t be able to exchange for cash,but they are able to be used towardsthe purchase and order that is a higher price that is face value upon the payment of thedifference. The vouchers are only valid for the amount that is shown.
                        </Text>
                        <Text>
                        Cancelling an order
                        </Text>
                        <Text>
                        Once you have made an order and wish to cancel it, you will be able to cancel it and we willrefund you after the cancellation. If you are unhappy with the service you are able to contactus via email or phone number.
                        </Text>
                        <Text>
                        Payment method
                        </Text>
                        <Text>
                        When using our homely hub website there are different ways you are able to make apayment.
                        </Text>
                        <Text>
                        <Text>Credit or debit card:</Text> when you have picked an orderyou are able to pay via your credit ordebit card.
                        </Text>    
                    </View>
                </View>                
            </View>

        </ScrollView>
    </View>   
  );
};


export default Legal;
