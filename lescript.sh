#!/bin/bash
echo "Creating the new vm"
name="ProcessMaker3.4"
cd /home/ariel/VirtualBox\ VMs/
if [[ -e $name ]] ; then
    i=0
    while [[ -e $name-$i ]] ; do
        let i++
    done
    name=$name-$i
fi
#VBoxManage createvm --name $name --ostype Debian_64 --register
cd /home/ariel/Documents/
vboxmanage import --vsys 0 --vmname $name le\ PM\ test.ova
vboxmanage startvm $name
echo "Vm created"
sleep 30
vboxmanage guestproperty get $name "/VirtualBox/GuestInfo/Net/0/V4/IP"
