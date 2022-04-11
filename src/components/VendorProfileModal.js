import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  Pressable,
  Image,
  ToastAndroid,
  Modal,
  Animated,
} from 'react-native';
import {COLORS, FONTS, SIZES, constants, icons} from '../constants';
import TextButton from '../components/TextButton';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons'; 

const VendorProfileModal = () => {
  const [showDialog, setShowDialog] = useState(true);

  const scrollX = React.useRef(new Animated.Value(0)).current;
  const flatListRef = React.useRef();

  const [currentIndex, setCurrentIndex] = React.useState(0);

  const onViewChangeRef = React.useRef(({viewableItems, changed}) => {
    setCurrentIndex(viewableItems[0].index);
  });

  const Dots = () => {
    const dotPosition = Animated.divide(scrollX, SIZES.width);

    return (
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
          marginBottom: SIZES.radius
        }}>
        {constants.vendorProfile_ModalDialouge.map((item, index) => {
          const dotColor = dotPosition.interpolate({
            inputRange: [index - 1, index, index + 1],
            outputRange: [COLORS.darkGray, COLORS.white, COLORS.darkGray],
            extrapolate: 'clamp',
          });

          const dotWidth = dotPosition.interpolate({
            inputRange: [index - 1, index, index + 1],
            outputRange: [10, 10, 10],
            extrapolate: 'clamp',
          });

          return (
            <Animated.View
              key={`dot-${index}`}
              style={{
                borderRadius: 5,
                marginHorizontal: 6,
                width: dotWidth,
                height: 10,
                backgroundColor: dotColor,
              }}
            />
          );
        })}
      </View>
    );
  };

  function renderFooter() {
    return (
      <View>
        {/* Buttons */}
        {currentIndex < constants.vendorProfile_ModalDialouge.length - 1 && (
          <View
            style={{
              alignItems: 'center',
              justifyContent: 'center',
              marginBottom: SIZES.radius + 3
            }}>
            <TextButton
              label="Next"
              buttonContainerStyle={{
                height: 33,
                width: 100,
                borderRadius: SIZES.radius,
                backgroundColor: COLORS.white
              }}
              labelStyle={{color: COLORS.black, ...FONTS.body4}}
              onPress={() => {
                flatListRef?.current?.scrollToIndex({
                  index: currentIndex + 1,
                  animated: true,
                });
              }}
            />
          </View>
        )}

        {currentIndex == constants.vendorProfile_ModalDialouge.length - 1 && (
          <View style={{
            alignItems: 'center',
            justifyContent: 'center',
            marginBottom: SIZES.radius + 3
          }}>
            <TextButton
              label="Next"
              buttonContainerStyle={{
                height: 33,
                width: 100,
                borderRadius: SIZES.radius,
                backgroundColor: COLORS.white
              }}
              labelStyle={{color: COLORS.black, ...FONTS.body4}}
              onPress={() => setShowDialog(false)}
            />
          </View>
        )}

      </View>
    );
  }

  return (
    <Modal
      visible={showDialog}
      transparent
      onRequestClose={() => setShowDialog(false)}
      animationType="slide"
      hardwareAccelerated>
      <View style={styles.modal_view}>
        <View style={styles.topContainer}>
          <Text style={styles.headertext}>Getting To Know</Text>
          <Text style={styles.headertext}>Your Business Dashboard</Text>
          <View
            style={{
              borderWidth: 2,
              marginTop: SIZES.base,
              marginHorizontal: SIZES.padding * 3,
              borderRadius: SIZES.radius,
              borderColor: COLORS.white,
            }}></View>
        </View>

        <View style={styles.bottomContainer}>
          <View>
            <TextButton
              label="Business Editor"
              buttonContainerStyle={{
                backgroundColor: null,
                marginTop: SIZES.padding,
              }}
              labelStyle={{...FONTS.body3}}
            />

            <Animated.FlatList
              ref={flatListRef}
              horizontal
              pagingEnabled
              data={constants.vendorProfile_ModalDialouge}
              scrollEventThrottle={16}
              snapToAlignment="center"
              showsHorizontalScrollIndicator={false}
              onScroll={Animated.event(
                [{nativeEvent: {contentOffset: {x: scrollX}}}],
                {useNativeDriver: false},
              )}
              onViewableItemsChanged={onViewChangeRef.current}
              keyExtractor={item => `${item.id}`}
              renderItem={({item, index}) => {
                return (
                  <View style={{
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: 345,
                    }}>
                    <Text style={{
                    textAlign: 'center',
                    color: COLORS.white,
                    ...FONTS.body5,
                    paddingHorizontal:SIZES.radius,
                  }}>{item.description}</Text>
                  </View>
                );
              }}
            />

            {/* <View style={{justifyContent:'center', alignItems:'center'}}>
            <Pressable
              onPress={() => setShowDialog(false)}
              style={styles.modal_button}
              android_ripple={{color: '#000'}}>
              <Text style={{...FONTS.h4}}>Next</Text>
            </Pressable>
            </View> */}

            {renderFooter()}
            <Dots />
          </View>
         
        </View>
      </View>
      <View style={styles.menuView}>
        <View style={styles.menuViewContainer}>
          <TextButton
            label="Business Editor"
            buttonContainerStyle={{
              backgroundColor: null,
              alignItems: null,
              marginBottom: SIZES.radius,
            }}
            appendComponent={<Image source={icons.businesseditor} />}
            prependComponent={
              <Ionicons name="chevron-forward-outline" size={22} />
            }
            labelStyle={{marginLeft: 5, ...FONTS.body4, color: COLORS.black}}
            onPress={() => {}}
          />

          <TextButton
            label="Menu Builder"
            buttonContainerStyle={{
              backgroundColor: null,
              alignItems: null,
              marginBottom: SIZES.radius,
            }}
            appendComponent={<Image source={icons.orders} />}
            prependComponent={
              <Ionicons name="chevron-forward-outline" size={22} />
            }
            labelStyle={{marginLeft: 5, ...FONTS.body4, color: COLORS.black}}
            onPress={() => {}}
          />

          <TextButton
            label="Review Management"
            buttonContainerStyle={{
              backgroundColor: null,
              alignItems: null,
              marginBottom: SIZES.radius,
            }}
            appendComponent={<Image source={icons.businessanalytics} />}
            prependComponent={
              <Ionicons name="chevron-forward-outline" size={22} />
            }
            labelStyle={{marginLeft: 5, ...FONTS.body4, color: COLORS.black}}
            onPress={() => {}}
          />

          <TextButton
            label="Orders"
            buttonContainerStyle={{
              backgroundColor: null,
              alignItems: null,
              marginBottom: SIZES.radius,
            }}
            appendComponent={<Image source={icons.review} />}
            prependComponent={
              <Ionicons name="chevron-forward-outline" size={22} />
            }
            labelStyle={{marginLeft: 5, ...FONTS.body4, color: COLORS.black}}
            onPress={() => {}}
          />
          <TextButton
            label="Business Analytics"
            buttonContainerStyle={{backgroundColor: null, alignItems: null}}
            appendComponent={<Image source={icons.menubuilder} />} 
            prependComponent={
              <Ionicons name="chevron-forward-outline" size={22} />
            }
            labelStyle={{marginLeft: 5, ...FONTS.body4, color: COLORS.black}}
            onPress={() => {}}
          />
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  bodytext: {
    color: COLORS.white,
    margin: 5,
    textAlign: 'center',
    ...FONTS.body5,
  },
  headertext: {
    color: COLORS.white,
    margin: 1,
    textAlign: 'center',
    ...FONTS.body3,
  },
  modal_view: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#00000099',
  },
  menuView: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#00000099',
  },
  bottomContainer: {
    width: 345,
    height: 190,
    backgroundColor: COLORS.primary,
    marginTop: SIZES.padding + 35,
    alignItems: 'center',
    justifyContent: 'center',
  },
  topContainer: {
    width: 300,
    height: 100,
    backgroundColor: COLORS.primary,
    marginTop: SIZES.padding,
    paddingTop: SIZES.radius,
  },
  menuViewContainer: {
    justifyContent: 'center',
    width: 345,
    height: 220,
    backgroundColor: COLORS.white,
    marginTop: 5,
    borderRadius: 5,
    paddingHorizontal: SIZES.padding,
  },
  modal_button: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: COLORS.white,
    height: 33,
    width: 100,
    marginTop: SIZES.base,
    borderRadius: SIZES.base,
  },
});

export default VendorProfileModal;
