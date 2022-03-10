import {View, Text, Image, Switch, Button} from 'react-native';
import React, {useState} from 'react';
import {COLORS, FONTS, SIZES} from '../../constants/theme';
import {ScrollView, TouchableOpacity} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/MaterialIcons';
import TextButton from '../../components/TextButton';
import FormInput from '../../components/FormInput';
import FAIcon from 'react-native-vector-icons/FontAwesome5';
import {Avatar, Checkbox, Searchbar} from 'react-native-paper';
import { Accordion } from '@dooboo-ui/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Dropdown from './Dropdown';


const CustomerSupport = ({navigation}) => {  

  const [search, setSearch] = React.useState("");

  const updateSearch = query => setSearch(query);
  useNativeDriver: true;
  //keeps erroring out saying this (useNativeDriver has to be true or false) is required but not crashing or breaking 
  //the app
  
  state = {
    // contents: [
    //   {
    //     title: 'About Homely Hub',
    //     Subtitle1: 'What is Homely Hub?',
    //     body:"Homely Hub delivers food from your local African restaurants straight to yourdoorstep. The Home Hub mission seeks to bridge the gap betweenrestaurants, Chefs and other stakeholders involved in cooking African mealswith their customers.Read more here(link to about page)."
    //   },
    //   {
    //     title: 'Useing homely hub',
    //     Subtitle1: 'How does it work?',
    //     body:'Homely Hub is available for ordering via the website or by downloading theapp; iOS or Android.All you need to do is:1. Sign up and create an account1.1.1. Continue as guest2. Browse and choose from the food on the menu3. Select a payment method4. Order and enjoy your African meal',
    //   },
    //   {
    //     title: 'What Time is Homely Hub Available',
    //     body: 'We deliver every day from morning until late at night but restaurants will havedifferent opening and closing times.',
    //   },
    //   {
    //     title: 'Account and payment options',
    //     Subtitle1: "I forgot my password:",
    //     body:" To change your password, click the link below. You'll get an email with aone-of-a-kind link to establish a new password. Make sure you don't shareyour password with anybody else.Link to forgot password page.",
    //     Subtitle2:"How do I update my account details?",
    //     body2:" In your Homely Hub app, you may change your name, email, phone number and address: ",
    //     List:"1. From the right-hand side of the app, tap the profile symbol in the menubar.",
    //     List2:"2. Select 'Settings,'' then 'Edit account.",
    //     List3:"'3. Edit the information in the detail you wish to change by tapping it andtyping it in.",
    //     List4:"4. To validate your update, you'll be asked to provide a verificationnumber or your current password.",Subtitle3:"How do I update or delete a payment method?",
    //     body3:"To amend or delete an existing payment method, follow the procedures below:",
    //     List5:"1.From the right-hand side of the app, tap the profile symbol in the menubar.",
    //     List6:"2. Select the card you want to erase from the 'wallet' menu.",
    //     List7:"3. In the confirmation pop-up, tap 'edit' or 'delete', then save.'"
    //   },
    //   {
    //     title: 'Fees on Homely Hub',
    //     Subtitle1: "Delivery fees:",
    //     body:" The cost of delivery is depending on your location. Some restaurants provide their Fee. You'll spend less on local restaurants, and you'll always know how much it will cost before you choose one.",
    //     Subtitle2:"Service fee: ",
    //     body2:"This fee varies on the amount of your order and will be calculated before any promotions or discounts are applied; you will always see the exact amount at checkout. Small order fee Most restaurants charge a fee for orders under a specific value. Although restaurants are free to determine their prices, the amount ranges. By addingadditional items, you can eliminate the cost."
    //   },
    // ],
  };

  return (
    <View style={{flex: 1}}>
      {/* HEADER */}
<ScrollView>
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
          Customer Service
        </Text>
      </View>

      {/* search box */}

      <View
      style={{
        justifyContent:'center',
        backgroundColor: COLORS.white,
        alignItems:'center',
        width:SIZES.width - 150,
        padding:SIZES.padding -1,
        alignSelf:'center',
        marginTop: 50,
        marginBottom: 30,
        borderRadius:10,
      }}
      >
        <Text
        style={{
          paddingBottom: 20,
          color:COLORS.black,
        }}>
          Need some help?
        </Text>
        <Searchbar
        placeholder="Search something"
        onChangeText={updateSearch}
        value={search}
        fontSize={12}
        clearIcon={null}
        cancelIcon={null}
        />

      </View>

      {/* buttons for diffrent sections */}
      <View>
        {/* text button 1 and 2 */}
        <View
        style={{
          justifyContent:'center',
          alignItems:'center',
          flexDirection:'row',

        }}
        >
        <TouchableOpacity
        style={{
          padding:SIZES.padding,
        }}
        // onPress={onPress}
        >
          <View style={{
            padding:SIZES.padding,
            flexDirection:'column', 
            alignItems: 'center',
            justifyContent:'center',
            flexDirection:'column',
            backgroundColor:COLORS.white,
            borderRadius:SIZES.radius,
            minHeight: SIZES.height- 570,
            minWidth: SIZES.width - 300,

            }}>
            <FAIcon name="lightbulb" size={22} />
            <Text
            style={{
              flexWrap:'wrap',
            }}
            >
              Getting
            </Text>
            <Text>
            started
            </Text>
          </View>  
        </TouchableOpacity>
        <TouchableOpacity
        style={{
          padding:SIZES.padding,
        }}
        // onPress={onPress}
        >
          <View style={{
            padding:SIZES.padding,
            flexDirection:'column', 
            alignItems: 'center',
            justifyContent:'center',
            flexDirection:'column',
            backgroundColor:COLORS.white,
            borderRadius:SIZES.radius,
            minHeight: SIZES.height- 570,
            minWidth: SIZES.width - 300,
            }}>
            <Icon name="contact-phone" size={22} />
            <Text
            style={{
            }}
            >
             Contact us
            </Text>
          </View>  
        </TouchableOpacity>
        </View>
        {/* text button 3 and 4 */}
        <View
        style={{
          justifyContent:'center',
          alignItems:'center',
          flexDirection:'row',
        }}>
        <TouchableOpacity
        style={{
          padding:SIZES.padding,
        }}
        // onPress={onPress}
        >
          <View style={{
            padding:SIZES.padding,
            flexDirection:'column', 
            alignItems: 'center',
            justifyContent:'center',
            flexDirection:'column',
            backgroundColor:COLORS.white,
            borderRadius:SIZES.radius,
            minHeight: SIZES.height- 570,
            minWidth: SIZES.width - 300,
            }}>
            <Icon name="feedback" size={22} />
            <Text
            style={{
            }}
            >
             Feedback
            </Text>
          </View>  
        </TouchableOpacity>
        <TouchableOpacity
        style={{
          padding:SIZES.padding,
        }}
        // onPress={onPress}
        >
          <View style={{
            padding:SIZES.padding,
            flexDirection:'column', 
            alignItems: 'center',
            justifyContent:'center',
            flexDirection:'column',
            backgroundColor:COLORS.white,
            borderRadius:SIZES.radius,
            minHeight: SIZES.height- 570,
            minWidth: SIZES.width - 300,
            }}>
            <Ionicons name="documents" size={22} />
            <Text
            style={{
            }}
            >
             Legal
            </Text>
          </View>  
        </TouchableOpacity>
        </View>
      
        
      </View>

      {/* faq  drop downs */}
      <View
      style={{
        justifyContent:'center',
        alignItems:'center',
        padding:SIZES.padding,
      }}
      >
        <Text
        style={{
          color:COLORS.primary,
          padding:SIZES.padding
        }}
        > Frequently Asked Questions </Text>

        {/* dropdown card */}
        <View>
          <Dropdown 
            label={'About Homely Hub'}
            Title={"Yo hows it going"}
            // Title2={''}
            Title3={'f you'} 
          />
        </View>
        <View>
          <Dropdown 
            label={'About Homely Hub'}
            Title={"Yo hows it going"}
            Title2={'f you'} 
          />
        </View>
        <View>
          <Dropdown 
            label={'About Homely Hub'}
            Title={"Yo hows it going"}
            Title2={'f you'} 
          />
        </View>
        <View>
          <Dropdown 
            label={'About Homely Hub'}
            Title={"Yo hows it going"}
            Title2={'f you'} 
          />
        </View>
        <View>
          <Dropdown 
            label={'About Homely Hub'}
            Title={"Yo hows it going"}
            Title2={'f you'} 
          />
        </View>
        <View>
          {/* <ScrollView style={{ 
            alignSelf: 'stretch',
          }}>
            {
              this.state.contents
                ? this.state.contents.map((param, i) => {
                  useNativeDriver: true
                  return (
                    <View style={{
                      paddingBottom:SIZES.padding,
                      alignItems:'flex-start'
                    }}>
                    <Accordion
                      useNativeDriver={true}
                      key={i}
                      contentVisible={false}
                      style={{
                        marginLeft: 5, 
                        ...FONTS.body4, 
                        color: COLORS.darkGray,
                        justifyContent:'flex-start',
                        alignItems:'center',
                        width:SIZES.width - 20,
                        backgroundColor:COLORS.white,
                        borderRadius: SIZES.radius,
                        
                      }}
                      visibleElement={
                        <Icon 
                          name="keyboard-arrow-down" 
                          style={{paddingLeft: SIZES.padding * 8}}
                          size={22}
                        />
                      }
                      invisibleElement={
                        <Icon 
                          name="keyboard-arrow-right"
                          style={{paddingLeft: SIZES.padding * 8}}
                          size={22}
                        />
                      }
                      header={
                        <View style={{

                        }}
                        >
                          <Text style={{
                            fontSize: 16,
                            color: 'blue',
                          }}>{param.title}</Text>

                        </View>
                      }
                    >
                      <Text style={[
                        {
                          fontSize: 16,
                          fontWeight:'bold',
                        }
                      ]}>
                        {param.Subtitle1}
                      </Text>
                      <Text>{param.body}</Text>
                      <Text style={[
                        {
                          fontSize: 16,
                          fontWeight:'bold',
                        }
                      ]}>{param.Subtitle2}</Text>
                      <Text>{param.body2}</Text>
                      <Text>{param.List}</Text>
                      <Text>{param.List2}</Text>
                      <Text>{param.List3}</Text>
                      <Text>{param.List4}</Text>
                      <Text style={[
                        {
                          fontSize: 16,
                          fontWeight:'bold',
                        }
                      ]}>{param.Subtitle3}</Text>
                      <Text>{param.body3}</Text>
                      <Text>{param.List5}</Text>
                      <Text>{param.List6}</Text>
                      <Text>{param.List7}</Text>
                    </Accordion>
                    </View>
                  );
                })
                : null
            }
            <View style={{ height: 96 }}/>
          </ScrollView> */}
        </View>
            
      </View>
      
      </ScrollView>
    </View>
  );
};

export default CustomerSupport;
