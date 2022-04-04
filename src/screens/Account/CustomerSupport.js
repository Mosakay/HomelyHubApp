import {View, Text, Image, Switch, Button} from 'react-native';
import React, {useState} from 'react';
import {COLORS, FONTS, SIZES} from '../../constants/theme';
import {ScrollView, TouchableOpacity} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/MaterialIcons';
import TextButton from '../../components/TextButton';
import FormInput from '../../components/FormInput';
import FAIcon from 'react-native-vector-icons/FontAwesome5';
import {Avatar, Checkbox, Searchbar, List} from 'react-native-paper';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { APP_ROUTES } from '../../routes/router';



const CustomerSupport = ({navigation}) => {  

  const [search, setSearch] = React.useState("");

  const updateSearch = query => setSearch(query);

  const [expanded, setExpanded] = React.useState(true);

  const handlePress = () => setExpanded(!expanded);
  
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
        onPress={() => navigation.navigate(APP_ROUTES.GettingStarted)}
        >
          <View style={{
            padding:SIZES.padding,
            flexDirection:'column', 
            alignItems: 'center',
            justifyContent:'center',
            flexDirection:'column',
            backgroundColor:COLORS.white,
            borderRadius:SIZES.radius,
            minHeight: SIZES.height / 6.5,
            minWidth: SIZES.width / 3.5,

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
        onPress={() => navigation.navigate(APP_ROUTES.ContactUs)}
        >
          <View style={{
            padding:SIZES.padding,
            flexDirection:'column', 
            alignItems: 'center',
            justifyContent:'center',
            flexDirection:'column',
            backgroundColor:COLORS.white,
            borderRadius:SIZES.radius,
            minHeight: SIZES.height / 6.5,
            minWidth: SIZES.width / 3.5,
            }}>
            <Icon name="contact-phone" size={22} />
            <Text
            style={{
            }}
            >
             Contact Us
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
          onPress={() => navigation.navigate(APP_ROUTES.Feedback)}
        >
          <View style={{
            padding:SIZES.padding,
            flexDirection:'column', 
            alignItems: 'center',
            justifyContent:'center',
            flexDirection:'column',
            backgroundColor:COLORS.white,
            borderRadius:SIZES.radius,
            minHeight: SIZES.height / 6.5,
            minWidth: SIZES.width / 3.5,
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
        onPress={() => navigation.navigate(APP_ROUTES.Legal)}
        >
          <View style={{
            padding:SIZES.padding,
            flexDirection:'column', 
            alignItems: 'center',
            justifyContent:'center',
            flexDirection:'column',
            backgroundColor:COLORS.white,
            borderRadius:SIZES.radius,
            minHeight: SIZES.height / 6.5,
            minWidth: SIZES.width / 3.5,
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
        padding:SIZES.radius,
      }}
      >
        <Text
        style={{
          color:COLORS.primary,
          padding:SIZES.padding
        }}
        > Frequently Asked Questions </Text>

        {/* Accordion card */}
        <View>
          <List.Section style={{
            width:SIZES.width - 50,
          }}>
          <List.Accordion
              title="About Homely Hub"
              style={{
                backgroundColor:COLORS.white,
                borderRadius:SIZES.radius,
              }}
            >
              <List.Item title="What is Homely Hub?"
              description="Homely Hub delivers food from your local African restaurants straight to yourdoorstep. The Home Hub mission seeks to bridge the gap betweenrestaurants, Chefs and other stakeholders involved in cooking African mealswith their customers.Read more here(link to about page)."
              descriptionNumberOfLines={0}
              />
            </List.Accordion>
            <List.Accordion
              title="Useing homely hub"
              style={{
                backgroundColor:COLORS.white,
                borderRadius:SIZES.radius,
                marginTop:SIZES.padding
              }}
            >
              <View
                style={{
                  backgroundColor:COLORS.white,
                  borderRadius:SIZES.radius,
                  marginTop:10
                }}
              >
                <List.Item title="How does it work?"
              description="Homely Hub is available for ordering via the website or by downloading theapp; iOS or Android.All you need to do is:"
              descriptionNumberOfLines={0}
              style={{
                marginTop:-10
              }}
              />
              <List.Item 
                description="1. Sign up and create an account or Continue as guest"
                style={{
                  marginTop:-40,
                }}
              />
              <List.Item 
                description="2. Browse and choose from the food on the menu"
                style={{
                  marginTop:-40,
                }}
              />
              <List.Item 
                description="3. Select a payment method"
                style={{
                  marginTop:-40,
                }}
              />
              <List.Item 
                description="4. Order and enjoy your African meal"
                style={{
                  marginTop:-40,
                }}
              />
              </View>
            </List.Accordion>
            <List.Accordion
              title="What Time is Homely Hub Available"
              style={{
                backgroundColor:COLORS.white,
                borderRadius:SIZES.radius,
                marginTop:SIZES.padding
              }}
            >

              <View
                style={{
                  backgroundColor:COLORS.white,
                  borderRadius:SIZES.radius,
                  marginTop:10
                }}
              >
                <List.Item 
                  description="We deliver every day from morning until late at night but restaurants will have different opening and closing times."
                  style={{
                    marginTop: -20
                  }}
                  descriptionNumberOfLines={0}
                />
              </View>
              
            </List.Accordion>
            <List.Accordion
              title="Account and payment options"
              style={{
                backgroundColor:COLORS.white,
                borderRadius:SIZES.radius,
                marginTop:SIZES.padding
              }}
            >
              <View
                style={{
                  backgroundColor:COLORS.white,
                  borderRadius:SIZES.radius,
                  marginTop:10
                }}
              >
              <List.Item
                title="I forgot my password:"
                description=" To change your password, click the link below. You'll get an email with aone-of-a-kind link to establish a new password. Make sure you don't shareyour password with anybody else.Link to forgot password page."
                descriptionNumberOfLines={0}
              />
              
              <List.Item 
                title="How do I update my account details?"
                description="In your Homely Hub app, you may change your name, email, phone number and address: "
                style={{
                  marginTop:-15
                }}
              />
              <List.Item 
                description="1. From the right-hand side of the app, tap the profile symbol in the menubar."
                style={{
                  marginTop:-40,
                }}
              />
              <List.Item 
                description="2. Select 'Settings,'' then 'Edit account."
                style={{
                  marginTop:-40,
                }}
              />
              <List.Item 
                description="3. Edit the information in the detail you wish to change by tapping it andtyping it in."
                style={{
                  marginTop:-40,
                }}
              />
              <List.Item 
                description="4. To validate your update, you'll be asked to provide a verificationnumber or your current password."
                style={{
                  marginTop:-40,
                }}
              />
              <List.Item 
                title="How do I update or delete a payment method?"
                description="To amend or delete an existing payment method, follow the procedures below:"
                style={{
                  marginTop:-15
                }}
              />
              <List.Item 
                description="1.From the right-hand side of the app, tap the profile symbol in the menubar."
                style={{
                  marginTop:-40,
                }}
              />
              <List.Item 
                description="2. Select the card you want to erase from the 'wallet' menu."
                style={{
                  marginTop:-40,
                }}
              />
              <List.Item 
                description="3. In the confirmation pop-up, tap 'edit' or 'delete', then save."
                style={{
                  marginTop:-40,
                }}
              />
              </View>
              
            </List.Accordion>
            <List.Accordion
              title="Fees on Homely Hub"
              style={{
                backgroundColor:COLORS.white,
                borderRadius:SIZES.radius,
                marginTop:SIZES.padding
              }}
            >
              <View
                style={{
                  backgroundColor:COLORS.white,
                  borderRadius:SIZES.radius,
                  marginTop:10
                }}
              >
              <List.Item 
                title="Delivery fees:" 
                description="The cost of delivery is depending on your location. Some restaurants provide their Fee. You'll spend less on local restaurants, and you'll always know how much it will cost before you choose one."
              />
              <List.Item 
                title="Service fee:"
                description="This fee varies on the amount of your order and will be calculated before any promotions or discounts are applied; you will always see the exact amount at checkout. Small order fee Most restaurants charge a fee for orders under a specific value. Although restaurants are free to determine their prices, the amount ranges. By addingadditional items, you can eliminate the cost."
                style={{
                  marginTop:-15,
                }}
                descriptionNumberOfLines={0}
              />
              </View>
              
            </List.Accordion>

              </List.Section>    
        </View>
    
            
      </View>
      
      </ScrollView>
    </View>
  );
};

export default CustomerSupport;